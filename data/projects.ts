import { Project } from "@/types/project";

export const projectsData: Record<string, Project> = {
  "cord-path": {
    slug: "cord-path",
    title: "Cord Path",
    description:
      "This is a CLI tool that finds the optimal path over a set of 2D coordinates. I created this project to learn more about the Rust programming language and how to use CUDA C++ for high performance computing.",
    repoLink: "cord-path",
    techStack: ["Rust", "CUDA C++"],
    sections: [
      {
        title: "Nearest Neighbor TSP",
        description:
          "This is a simple implementation of the Nearest Neighbor algorithm for the Traveling Salesman Problem. It starts at a given node and always visits the nearest unvisited node.",
        language: "rust",
        code: `fn nearest_neighbor_tsp(dist_matrix: &[f32], n: usize, start: usize) -> Vec<usize> {
    let mut visited = vec![false; n];
    let mut path = Vec::with_capacity(n);
    let mut current = start;

    path.push(current);
    visited[current] = true;

    for _ in 1..n {
        let mut next = None;
        let mut min_dist = f32::MAX;

        for candidate in 0..n {
            if !visited[candidate] && dist_matrix[current * n + candidate] < min_dist {
                min_dist = dist_matrix[current * n + candidate];
                next = Some(candidate);
            }
        }

        if let Some(next_node) = next {
            path.push(next_node);
            visited[next_node] = true;
            current = next_node;
        } else {
            break;
        }
    }

    path
}`,
      },
      {
        title: "2-opt Optimization",
        description:
          "This is a local search optimization algorithm. It removes two edges and replaces them with two different edges to shorten the total path length.",
        language: "rust",
        code: `// 2-opt local optimization
fn two_opt(dist_matrix: &[f32], n: usize, path: &mut Vec<usize>) {
    let mut improved = true;

    while improved {
        improved = false;
        for i in 1..(n - 1) {
            for j in (i + 1)..n {
                let a = path[i - 1];
                let b = path[i];
                let c = path[j - 1];
                let d = path[j];

                let old_dist = dist_matrix[a * n + b] + dist_matrix[c * n + d];
                let new_dist = dist_matrix[a * n + c] + dist_matrix[b * n + d];

                if new_dist < old_dist {
                    path[i..j].reverse();
                    improved = true;
                }
            }
        }
    }
}`,
      },
      {
        title: "CUDA Distance Matrix Kernel",
        description:
          "This is the CUDA kernel that computes the distance matrix on the GPU. This significantly improves the performance of the algorithm for a large number of coordinates.",
        language: "cpp",
        code: `#include <cuda_runtime.h>
#include <math.h>
#include <stdio.h>

#define CHECK_CUDA_ERROR(val) check((val), #val, __FILE__, __LINE__)
void check(cudaError_t err, const char* func, const char* file, int line) {
    if (err != cudaSuccess) {
        fprintf(stderr, "CUDA Error at %s:%d: %s failed with error %s\\n", file, line, func, cudaGetErrorString(err));
        exit(1);
    }
}

// Kernel computes dist(i,j) = sqrt((x_i - x_j)^2 + (y_i - y_j)^2)
__global__ void compute_distance_matrix_kernel(const int* xs, const int* ys, float* dist_matrix, int n) {
    int i = blockIdx.y * blockDim.y + threadIdx.y; // row
    int j = blockIdx.x * blockDim.x + threadIdx.x; // col

    if (i < n && j < n) {
        int dx = xs[i] - xs[j];
        int dy = ys[i] - ys[j];
        dist_matrix[i * n + j] = sqrtf(float(dx * dx + dy * dy));
    }
}

extern "C" void compute_distance_matrix(const int* h_xs, const int* h_ys, float* h_dist_matrix, int n) {
    int* d_xs = nullptr;
    int* d_ys = nullptr;
    float* d_dist_matrix = nullptr;

    size_t int_size = n * sizeof(int);
    size_t matrix_size = n * n * sizeof(float);

    CHECK_CUDA_ERROR(cudaMalloc((void**)&d_xs, int_size));
    CHECK_CUDA_ERROR(cudaMalloc((void**)&d_ys, int_size));
    CHECK_CUDA_ERROR(cudaMalloc((void**)&d_dist_matrix, matrix_size));

    CHECK_CUDA_ERROR(cudaMemcpy(d_xs, h_xs, int_size, cudaMemcpyHostToDevice));
    CHECK_CUDA_ERROR(cudaMemcpy(d_ys, h_ys, int_size, cudaMemcpyHostToDevice));

    dim3 threadsPerBlock(16, 16);
    dim3 blocks((n + threadsPerBlock.x - 1) / threadsPerBlock.x,
                (n + threadsPerBlock.y - 1) / threadsPerBlock.y);

    compute_distance_matrix_kernel<<<blocks, threadsPerBlock>>>(d_xs, d_ys, d_dist_matrix, n);
    CHECK_CUDA_ERROR(cudaDeviceSynchronize());

    CHECK_CUDA_ERROR(cudaMemcpy(h_dist_matrix, d_dist_matrix, matrix_size, cudaMemcpyDeviceToHost));

    cudaFree(d_xs);
    cudaFree(d_ys);
    cudaFree(d_dist_matrix);
}`,
      },
    ],
  },
  "tauri-resource-monitor": {
    slug: "tauri-resource-monitor",
    title: "Resource Monitor",
    description:
      "In this project, I gained more experience using the modern Tauri framework. I built a resource monitoring app that tracks CPU, GPU, and RAM usage. It also displays general system information. The app is modern, lightweight, and performant, leveraging Rust and Tauri, both known for their high performance and small bundle sizes.",
    repoLink: "resource-monitor",
    techStack: ["Rust", "TypeScript"],
    downloadLink: "resource-monitor/releases/latest",
    downloadText:
      "If you want to try this app out for yourself, click on the download button and install the app using the MSI or EXE installer from GitHub.",
    sections: [
      {
        title: "ResourceMonitor Rust Struct",
        description:
          "This is a snippet of my ResourceMonitor Struct written in Rust. This struct helps me gather all data from the different monitors with a function to return all data at once and functions to only get certain data from each monitor.",
        language: "rust",
        code: `impl ResourceMonitor {
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
}`,
      },
      {
        title: "lib.rs",
        description:
          "The lib.rs file is the connection point between the NextJS frontend and Rust backend. This file exposes commands to the frontend which fetch the data gathered by the ResourceMonitor.",
        language: "rust",
        code: `#[tauri::command]
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
}`,
      },
      {
        title: "LineGraph Component",
        description:
          "This component generates a line graph on the fly to represent some historical data about the usages from each monitor. This line graph is an SVG image which get displayed below the other component data.",
        language: "typescript",
        filePath: "/assets/snippets/tauri-resource-monitor/LineGraph.txt",
      },
    ],
  },
  "rust-snake": {
    slug: "rust-snake",
    title: "Snake",
    description:
      "I created this project in order to learn the modern programming language Rust. For this, I recreated the iconic game Snake. I was able to make myself familiar with the principles of Rust and its syntax. I use a minimal graphics library to get a graphics interface, instead of just a console application.",
    repoLink: "rust-snake",
    techStack: "Rust",
    downloadLink: "rust-snake/blob/master/rust-snake.rar",
    downloadText:
      "If you want to try this app out for yourself, click on the download button and install rust-snake.rar from GitHub, extract the .rar file and run the rust-snake executable.",
    videoYoutubeId: "tzuUV8q-_Yw",
    sections: [
      {
        title: "Game Struct",
        description:
          "Here I created a Game struct with a new() function. This struct is the primary object that contains all the game logic. The new() function can be used to start a new game window, but it is only used during the initial setup.",
        language: "rust",
        code: `struct Game {
    window: Window,
    width: usize,
    height: usize,
    buffer: Vec<u32>,
    cell_size: usize,
    snake: Snake,
    has_started: bool,
    cookie_pos: [usize; 2],
}

impl Game {
    fn new() -> Self {
        let width = 600;
        let height = 400;
        let window = Window::new("Snake", width, height, WindowOptions::default())
            .expect("Failed to create window");
        let buffer = vec![0x000000; width * height];
        Game {
            window,
            width,
            height,
            buffer,
            cell_size: 20,
            snake: Snake::new(),
            has_started: false,
            cookie_pos: [8, 9],
        }
    }
}`,
      },
      {
        title: "Game::run() Function",
        description:
          "This is the run() function. This function handles the entire game loop. First, it checks whether the player is pressing the spacebar while the game hasn't started yet. If this happens, the game is initialized and proceeds to the next if statement. In this next block, the player's input is processed, then the next position is calculated, then it checks whether a cookie has been collected (to grow the snake), and finally, the buffer is updated to render the next position. If the player loses by running into a wall or into themselves, a new snake is created using Snake::new(). You can exit the game at any time using the Escape key.",
        language: "rust",
        code: `fn run(&mut self) {
    while self.window.is_open() {
        if self.window. is_key_down(Key::Space) && self.has_started == false {
            self.reset_buffer();
            self.has_started = true;
            let head = *self.snake.body.front().unwrap();
            self.set_cell_color(head[0], head[1], self.snake.color);
            self.set_cell_color(self.cookie_pos[0], self.cookie_pos[1], 0xF59B42);
            self.update();
        }
        if self.has_started == true {
            self.capture_input(150);
            self.calculate_next_position();
            self.cookie_check();
            let head = *self.snake.body.front().unwrap();
            self.set_cell_color(head[0], head[1], self.snake.color);
        }
        if !self.has_started {
            self.snake = Snake::new();
        }
        self.update();
        if self.window.is_key_down(Key::Escape) {
            break;
        }
    }
}`,
      },
      {
        title: "Snake Struct",
        description:
          "Here I created a complex data type, a struct, that stores the data related to the snake. I also created a new() function that can be called to create a new snake, similar to a constructor in a Java program.",
        language: "rust",
        code: `struct Snake {
    color: u32,
    body: VecDeque<[usize; 2]>,
    direction: u8,
    length: usize,
}

impl Snake {
    fn new() -> Self {
        let color = 0xFF73F1;
        let direction = 0;
        let snake_length = 5;
        let starting_position: [usize; 2] = [10, 12];
        let mut snake_body = VecDeque::new();
        snake_body.push_front(starting_position);
        Snake {
            color: color,
            body: snake_body,
            direction: direction,
            length: snake_length,
        }
    }
}`,
      },
    ],
  },
  "ts-barcode": {
    slug: "ts-barcode",
    title: "1D & 2D Barcodes",
    description:
      "I created this project in order to gain more experience with the NextJS framework. With this web app you can generate different types of 1 and 2 dimensional barcodes, such as QR Codes, EAN-13 Codes, Code 128 codes or Data Matrix. This web app also allows you to to scan your previously generated codes and other codes. For the styling of the web app I chose the Tailwind CSS library for inline styling and in general shortened styling.",
    repoLink: "barcode-reader",
    techStack: "TypeScript",
    liveDemoLink: "qr",
    liveDemoText:
      "You can try the web app yourself by clicking on the button. You will need to allow camera access on the reader. From personal experience I noticed the web app does not always work on Android devices.",
    videoYoutubeId: "p57TidpYQ3Q",
    sections: [
      {
        title: "Barcode Component",
        description:
          "This React component takes in props and based off of these props it generates a barcode. With the prop chosenOption you can define what type of code you want. The prop value defines the content of the barcode. To generate the barcodes I used the bwipjs library. At the end, this component returns either the successfully rendered barcode or an error message.",
        language: "typescript",
        filePath: "/assets/snippets/ts-barcode/barcode.txt",
      },
      {
        title: "getCameraStream()",
        description:
          "This function is part of my Camera component. It creates a visual input field for the camera, captures the content of the video feed and then decodes the barcode. For the decoding of the barcode I use the popular @zxing multi code reader library. If the camera decodes successfully, it sets the value of the barcode, if not, it will return a detailed error message which also shows what kind of error.",
        language: "typescript",
        filePath: "/assets/snippets/ts-barcode/camera.txt",
      },
    ],
  },
  "asm-tic-tac-toe": {
    slug: "asm-tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "To improve my assembly skills, I have set myself the goal of writing Tic Tac Toe in assembly. I use the emu8086 emulator to test my assembly code. This project helped me a lot to learn more about the internal structure of a CPU. I learned how to use methods and loops in assembly, how to better handle user inputs and error handling in assembly. With this project I also learned how the 32 bit addresses inside a program look like and how to assign values to them.",
    repoLink: "assembly-tic-tac-toe",
    techStack: "Assembly",
    videoYoutubeId: "astwYXRNOK8",
    sections: [
      {
        title: "Game initialisation",
        description:
          "Here is the INIT method. This method initialises and declares all needed variables, in order to start the game without encountering any errors.",
        language: "x86asm",
        code: `    INIT:         ; init all variables
    MOV PLAYER, 50
    MOV MOVES, 0
    MOV DONE, 0
    MOV DR, 0

    MOV C1, 49
    MOV C2, 50
    MOV C3, 51
    MOV C4, 52
    MOV C5, 53
    MOV C6, 54
    MOV C7, 55
    MOV C8, 56
    MOV C9, 57

    JMP PLRCHANGE`,
      },
      {
        title: "Checking Rules",
        description:
          "This is a section of my CHECK method. This method goes over all possible combinations and checks if a Tic Tac Toe has come along somewhere. If that happens it assigns the winner. This method runs after every turn of both players.",
        language: "x86asm",
        code: `CHECK:                  ; 8 possible combinations
    CHECK1:             ; checking combo combo 1, 2, 3
        MOV AL, C1
        MOV BL, C2
        MOV CL, C3

        CMP AL, BL
        JNZ CHECK2

        CMP BL, CL
        JNZ CHECK2

        MOV DONE, 1
        JMP BOARD

    CHECK2:             ; checking combo 4, 5, 6
        MOV AL, C4
        MOV BL, C5
        MOV CL, C6

        CMP AL, BL
        JNZ CHECK3

        CMP BL, CL
        JNZ CHECK3

        MOV DONE, 1
        JMP BOARD

    CHECK3:             ; checking combo 7, 8, 9
        MOV AL, C4
        MOV BL, C5
        MOV CL, C6

        CMP AL, BL
        JNZ CHECK4

        CMP BL, CL
        JNZ CHECK4

        MOV DONE, 1
        JMP BOARD`,
      },
      {
        title: "Handling invalid Inputs",
        description:
          "This here is my TAKEN method. This method makes sure that no invalid inputs are made. If an invalid input is made, it overwrites the last input with an empty line",
        language: "x86asm",
        code: `TAKEN:
    DEC MOVES           ; set cursor
        MOV AH, 4
        MOV DH, 16
        MOV DL, 20
        INT 10h

    LEA DX, TKN         ; cell taken display
    MOV AH, 9
    INT 21h

    MOV AH, 7
    INT 21h             ; set cursor
        MOV AH, 2
        MOV DH, 16
        MOV DL, 20
        INT 10h

    LEA DX, EMP         ; empty line to overwrite
    MOV AH, 9
    INT 21h             ; set cursor
        MOV AH, 2
        MOV DH, 16
        MOV DL, 20
        INT 10h

    JMP INPUT`,
      },
    ],
  },
  "java-to-do-list": {
    slug: "java-to-do-list",
    title: "To Do List",
    description:
      "This project is a simple To Do List application written in Java for Desktop. It includes the whole life cycle of an application.",
    repoLink: "java-to-do-list",
    techStack: ["Java", "CSS"],
    videoYoutubeId: "K9I_O7G8W1c",
    sections: [
      {
        title: "Main View",
        description:
          "The main view of the application is where the user can see all their lists and create new ones. It uses a VBox to arrange the buttons vertically and a ScrollPane to allow the user to scroll through their lists.",
        language: "java",
        code: `/* Main View */
@Override
public void start(Stage mainStage) {
    allLists = saveSystem.loadData();
    // Title label
    Label label = new Label("To Do List App");
    label.getStyleClass().add("title-label");

    // Create List Button
    Button createList = new Button("Create a New List");
    createList.setOnAction(e -> showCreateListPopup(mainStage));
    createList.getStyleClass().add("create-list-button");

    // ScrollPane for the listGroup
    ScrollPane scrollPane = new ScrollPane(listGroup);
    scrollPane.setFitToWidth(true);
    scrollPane.setPannable(true);
    scrollPane.setVbarPolicy(ScrollPane.ScrollBarPolicy.NEVER);
    scrollPane.setHbarPolicy(ScrollPane.ScrollBarPolicy.NEVER);

    // Delete list button
    Button deleteList = new Button("Delete a List");
    deleteList.setOnAction(e -> showDeleteListPopup(mainStage));
    deleteList.getStyleClass().add("delete-list-button");

    // Layout for main stage
    VBox mainVBox = new VBox(10);
    mainVBox.getChildren().addAll(label, createList, deleteList, scrollPane);

    HBox mainHBox = new HBox(20);
    mainHBox.setPadding(new Insets(0, 0, 0, 10));
    mainHBox.getChildren().add(mainVBox);

    // Initial Scene setup
    updateListGroup(mainStage);
    Scene scene = new Scene(mainHBox, 350, 600);
    scene.getStylesheets().add(getClass().getResource("style.css").toExternalForm());
    mainStage.setTitle("To Do List App");
    mainStage.setScene(scene);
    mainStage.show();

    mainScene = scene;
}`,
      },
      {
        title: "Save System",
        description:
          "The save system uses the org.json library to save and load the data from a JSON file. This allows the user to keep their data even after closing the application.",
        language: "java",
        code: `public void saveData(List<ToDoList> list) {
    // Create a JSONArray directly from the list
    JSONArray jsonArray = new JSONArray();

    // Convert each ToDoList object to JSON and add it to the JSONArray
    for (ToDoList toDoList : list) {
        jsonArray.put(toDoList.toJSON());
    }

    try (FileWriter file = new FileWriter(filePath)) {
        // This will overwrite the file
        file.write(jsonArray.toString(2)); // Pretty print with an indent factor of 2
        System.out.println("Data saved to " + filePath);
    } catch (IOException e) {
        System.err.println("Error saving data: " + e.getMessage());
    }
}

// Load data from the file
public List<ToDoList> loadData() {
    List<ToDoList> data = new ArrayList<>();

    try (FileReader fileReader = new FileReader(filePath)) {
        StringBuilder sb = new StringBuilder();
        int content;
        while ((content = fileReader.read()) != -1) {
            sb.append((char) content); // Build the file content as a string
        }
        // Convert the string content to a JSONArray
        JSONArray jsonArray = new JSONArray(sb.toString());
        // Convert each JSON object to a ToDoList object and add it to the list
        for (int i = 0; i < jsonArray.length(); i++) {
            data.add(ToDoList.fromJSON(jsonArray.getJSONObject(i)));
        }
    }`,
      },
      {
        title: "ToDoList Logic",
        description:
          "The ToDoList class contains all the logic for managing tasks, such as adding, deleting, and sorting tasks. It also updates the completion percentage of the list.",
        language: "java",
        code: `public void updateCompletionPercentage() {
    completedTasks.clear();
    for (Task task : allTasks) {
        if (task.getTaskStatus() == TaskStatus.COMPLETED) completedTasks.add(task);
    }
    DecimalFormat df = new DecimalFormat("#.#");
    completionPercentage = Double.parseDouble(df.format((double) completedTasks.size() / allTasks.size() * 100));

    if (Double.isNaN(completionPercentage)) completionPercentage = 0;
}

public void sortList() {
    SortTasks sortTasks = new SortTasks(this.sortingOptions);
    if (this.sortingOptions == null) this.sortingOptions = SortingOptions.UNCATEGORIZED;
    displayTaskList = sortTasks.sortTasks(allTasks);
    System.out.println("Sorted " + allTasks + " to " + displayTaskList + " with " + sortingOptions.toFormattedString());
}

public void addTask(Task task) {
    allTasks.add(task);
    sortList();
}

public void deleteTask(Task task) {
    allTasks.remove(task);
    sortList();
}`,
      },
    ],
  },
  "css-valentines-card": {
    slug: "css-valentines-card",
    title: "Valentine's Card",
    description:
      "This project shows a simple digital Valentine's Day card. I created this project in order to practice my CSS skills, especially CSS animations.",
    repoLink: "valentines-card",
    techStack: ["CSS", "HTML", "JavaScript"],
    sections: [
      {
        title: "Heart Styling",
        description:
          "The heart is created using CSS only. It uses pseudo-elements :before and :after to create the two circles of the heart and the main div for the square part.",
        language: "css",
        code: `.heart {
    height: var(--heart-size);
    width: var(--heart-size);
    background: #f20044;
    position: relative;
    transform: rotate(-45deg);
    box-shadow: -10px 10px 90px #f20044;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 1px;
    z-index: 1;
}

.heart:before {
    content: '';
    position: absolute;
    height: var(--heart-size);
    width: var(--heart-size);
    background: #f20044;
    top: -60%;
    border-radius: var(--heart-border-radius);
    box-shadow: -10px -10px 90px #f20044;
}

.heart:after {
    content: '';
    position: absolute;
    height: var(--heart-size);
    width: var(--heart-size);
    background: #f20044;
    right: -60%;
    border-radius: var(--heart-border-radius);
    box-shadow: 10px 10px 90px #f20044;
    transition: transform 0.5s ease-in-out;
}`,
      },
      {
        title: "Animations",
        description:
          "The animations are used to make the heart scale and the arrow move. This gives the card a more dynamic feel.",
        language: "css",
        code: `.animate-arrow {
    animation: shoot-arrow 1s ease-out forwards;
    opacity: 1;
}

@keyframes shoot-arrow {
    0% {
        transform: translate(100vw, 60vh) rotate(var(--arrow-rotation));
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -45%) rotate(var(--arrow-rotation));
        opacity: 1;
    }
}

@keyframes scale-heart {
    0% {
        transform: rotate(-45deg) scale(1);
    }
    100% {
        transform: rotate(-45deg) scale(var(--heart-scale));
    }
}

.scale-heart {
    animation: scale-heart 1s ease-in-out forwards;
    animation-delay: 1s;
}`,
      },
    ],
  },
  "java-calculator": {
    slug: "java-calculator",
    title: "Calculator",
    description:
      "This is a semi-advanced calculator written in Java and CSS for styling using the JavaFX GUI library.",
    repoLink: "calculator",
    techStack: ["Java", "CSS"],
    videoYoutubeId: "p_u8rE-o49E",
    sections: [
      {
        title: "Operator Actions",
        description:
          "This snippet shows how the operator buttons are handled. It uses a Map to store the buttons and their corresponding operators, and then iterates through the map to set the action for each button.",
        language: "java",
        code: `//Operator Button Actions
Map<Button, String> operatorButtons = new HashMap<>();
operatorButtons.put(addBtn, "+");
operatorButtons.put(subtractBtn, "-");
operatorButtons.put(multiplyBtn, "*");
operatorButtons.put(divideBtn, "/");

operatorButtons.forEach((button, operator) ->
        button.setOnAction(e -> {
            if (!calc.currentNumber.isEmpty()) {
                calc.allNumbers.add(calc.currentNumber);
                calc.currentNumber = "";
                calc.allOperations.add(operator);
            } else if (!calc.allOperations.isEmpty()) {
                calc.allOperations.set(calc.allOperations.size() - 1, operator);
            } else {
                calc.allOperations.add(operator);
            }
            equationLabel.setText(calc.getCurrentEquation());
        })
);

//Negate button
negateBtn.setOnAction(e -> {
    if (calc.currentNumber.isEmpty()) {
        calc.currentNumber += "-";
    } else {
        if (calc.currentNumber.charAt(0) == '-') {
            calc.currentNumber = calc.currentNumber.substring(1);
        } else {
            calc.currentNumber = "-" + calc.currentNumber;
        }
    }
    output.setText(calc.getCurrentNumber());
    equationLabel.setText(calc.getCurrentEquation());
});`,
      },
      {
        title: "Calculation Logic",
        description:
          "The calculation logic handles the order of operations (multiplication and division first, then addition and subtraction). It splits the equation into parts and then iterates through them to perform the calculations.",
        language: "java",
        code: `public void calculateAll() {
    if (correctNumberAndOperationAmount()) {
        try {
            String[] parts = currentEquation.split(" ");
            System.out.println("Parts: " + Arrays.toString(parts));

            for (int i = 1; i < parts.length; i++) {
                if (parts[i].equals("*") || parts[i].equals("/")) {
                    double prevNum = Double.parseDouble(parts[i - 1]);
                    double nextNum = Double.parseDouble(parts[i + 1]);
                    double resultPart = 0;

                    if (parts[i].equals("*")) {
                        resultPart = prevNum * nextNum;
                    } else if (parts[i].equals("/")) {
                        if (nextNum == 0) {
                            result = "#ERROR#";
                            return;
                        }
                        resultPart = prevNum / nextNum;
                    }

                    parts[i - 1] = String.valueOf(resultPart);
                    for (int j = i; j < parts.length - 2; j++) {
                        parts[j] = parts[j + 2];
                    }
                    parts = Arrays.copyOf(parts, parts.length - 2);
                    i--;
                }
            }
        } catch (Exception e) {
            result = "#ERROR#";
        }
    } else {
        result = "#ERROR#";
    }
}`,
      },
    ],
  },
  "java-jokemon": {
    slug: "java-jokemon",
    title: "Jokemon",
    description:
      "In this project I created a 2D console based game with Java. The game is inspired by Pokémon but it's really limited regarding gameplay.",
    repoLink: "jokemon",
    techStack: "Java",
    hasImage: true,
    sections: [
      {
        title: "GameState Class",
        description:
          "The GameState class is used to store all the data related to the current game, such as the player's level, position, and their Jokemons. This class is serializable, which allows it to be saved and loaded from a file.",
        language: "java",
        code: `public class GameState implements Serializable {
    private int seed;
    private int playerLevel;
    private int playerCoins;
    private int playerTreats;
    private int[] playerPosition;
    private int playerDirection;

    private List<JokemonData> playerJokemons;
    private List<JokemonData> jokemons;
    private List<WildJokemonData> wildJokemons;

    public GameState(int seed, int playerLevel, int playerCoins, int playerTreats, int[] playerPosition,
      int playerDirection, List<JokemonData> jokemons, List<WildJokemonData> wildJokemons) {

        this.seed = seed;
        this.playerLevel = playerLevel;
        this.playerCoins = playerCoins;
        this.playerTreats = playerTreats;
        this.playerPosition = playerPosition;
        this.playerDirection = playerDirection;
        this.jokemons = jokemons;
        this.wildJokemons = wildJokemons;
    }
}`,
      },
      {
        title: "Building Abstract Class",
        description:
          "The Building class is an abstract class that defines the common properties and methods for all buildings in the game. It uses an enum to define the different building types.",
        language: "java",
        code: `public abstract class Building {
    // Enum for different building types
    public enum BuildingType {
        MEDICAL,
        SHOP,
        HOUSE,
        OUTSIDE
    }

    // Common properties
    protected int centerX;
    protected int centerY;
    protected BuildingType buildingType;
    protected boolean canEnter;
    protected char[][] design;

    // Constructor for the abstract class
    public Building(int centerX, int centerY, BuildingType buildingType, boolean canEnter, char[][] design) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.buildingType = buildingType;
        this.canEnter = canEnter;
        this.design = design;
    }

    // Getter for the Design of the abstract class
    public char[][] getBuildingDesign() {
        return design;
    }
}`,
      },
    ],
  },
};

export const personalProjects = Object.values(projectsData).map((p) => ({
  title: p.title,
  description: p.description,
  lang: p.techStack,
  link: p.slug,
}));
