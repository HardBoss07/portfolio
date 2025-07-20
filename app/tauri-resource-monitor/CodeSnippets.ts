export const resource_monitor: string = `
impl ResourceMonitor {
    pub fn new() -> Result<Self, String> {
        let sys = System::new_all();
        let nvml = Nvml::init().map_err(|e| format!("Failed to init NVML: {}", e))?;
        Ok(ResourceMonitor { sys, nvml })
    }

    pub fn collect_all_data(&mut self) -> ResourceData {
        self.sys.refresh_all();

        let cpu_info = CpuMonitor::get_cpu_info(&mut self.sys);
        let system_info = SystemMonitor::get_system_info(&mut self.sys);
        let memory_info = MemoryMonitor::get_memory_info(&mut self.sys);
        let gpu_info = self.collect_gpu_data();

        ResourceData {
            cpu: cpu_info,
            sys: system_info,
            mem: memory_info,
            gpu: gpu_info,
            timestamp_ms: std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .as_millis() as u64,
        }
    }

    pub fn collect_cpu_data(&mut self) -> CpuInfo {
        CpuMonitor::get_cpu_info(&mut self.sys)
    }

    pub fn collect_system_data(&mut self) -> SystemInfo {
        SystemMonitor::get_system_info(&mut self.sys)
    }

    pub fn collect_memory_data(&mut self) -> MemoryInfo {
        MemoryMonitor::get_memory_info(&mut self.sys)
    }

    pub fn collect_gpu_data(&self) -> GpuInfo {
        GpuMonitor::get_gpu_info(&self.nvml).unwrap_or_else(|_| GpuInfo {
            name: "Unknown".to_string(),
            temperature: 0,
            memory_used_mb: 0,
            memory_total_mb: 0,
            utilization_percent: 0,
            fan_speed_percent: None,
        })
    }
}
`;

export const lib: string = `
#[tauri::command]
fn get_all_resource_data(monitor: State<SharedResourceMonitor>) -> ResourceData {
    let mut monitor = monitor.lock().expect("Failed to lock ResourceMonitor");
    monitor.collect_all_data()
}

#[tauri::command]
fn get_cpu_data(monitor: State<SharedResourceMonitor>) -> CpuInfo {
    let mut monitor = monitor.lock().expect("Failed to lock ResourceMonitor");
    monitor.collect_cpu_data()
}

#[tauri::command]
fn get_system_data(monitor: State<SharedResourceMonitor>) -> SystemInfo {
    let mut monitor = monitor.lock().expect("Failed to lock ResourceMonitor");
    monitor.collect_system_data()
}

#[tauri::command]
fn get_memory_data(monitor: State<SharedResourceMonitor>) -> MemoryInfo {
    let mut monitor = monitor.lock().expect("Failed to lock ResourceMonitor");
    monitor.collect_memory_data()
}

#[tauri::command]
fn get_gpu_data(monitor: State<SharedResourceMonitor>) -> GpuInfo {
    let monitor = monitor.lock().expect("Failed to lock ResourceMonitor");
    monitor.collect_gpu_data()
}`;