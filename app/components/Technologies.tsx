import {FunctionComponent} from "react";
import {
    Html5Original,
    Css3Original,
    JavascriptOriginal,
    TypescriptOriginal,
    ReactOriginal,
    TailwindcssOriginal,
    NextjsOriginal,
    VitejsOriginal,
    NodejsOriginalWordmark,
    SpringOriginal,
    NpmOriginalWordmark,
    GitOriginal,
    DockerPlain,
    FirebaseOriginal,
    NginxOriginal,
    MysqlOriginalWordmark,
    DbeaverOriginal,
    JavaOriginal,
    CsharpOriginal,
    PythonOriginal,
    RustOriginal,
    CplusplusOriginal,
    TauriOriginal,
    WasmOriginal,
    BlenderOriginal,
    UnityOriginal,
    P5jsOriginal,
    ArduinoOriginalWordmark,
    MarkdownOriginal,
    ApacheOriginal,
} from 'devicons-react';

interface Technology {
    label: string;
    icon: FunctionComponent;
}

export default function Technologies() {
    const technologies: Technology[] = [
        {label: "Rust", icon: RustOriginal},
        {label: "Java", icon: JavaOriginal},
        {label: "Spring", icon: SpringOriginal},
        {label: "TypeScript", icon: TypescriptOriginal},
        {label: "MySQL", icon: MysqlOriginalWordmark},
        {label: "Git", icon: GitOriginal},
        {label: "Docker", icon: DockerPlain},
        {label: "React", icon: ReactOriginal},
        {label: "Next.js", icon: NextjsOriginal},
        {label: "Node.js", icon: NodejsOriginalWordmark},
        {label: "HTML5", icon: Html5Original},
        {label: "CSS3", icon: Css3Original},
        {label: "JavaScript", icon: JavascriptOriginal},
        {label: "Tailwind", icon: TailwindcssOriginal},
        {label: "Python", icon: PythonOriginal},
        {label: "NGINX", icon: NginxOriginal},
        {label: "Firebase", icon: FirebaseOriginal},
        {label: "NPM", icon: NpmOriginalWordmark},
        {label: "WASM", icon: WasmOriginal},
        {label: "C++", icon: CplusplusOriginal},
        {label: "Vite", icon: VitejsOriginal},
        {label: "DBeaver", icon: DbeaverOriginal},
        {label: "Arduino", icon: ArduinoOriginalWordmark},
        {label: "Markdown", icon: MarkdownOriginal},
        {label: "Apache", icon: ApacheOriginal},
        {label: "Unity", icon: UnityOriginal},
        {label: "Blender", icon: BlenderOriginal},
        {label: "p5.js", icon: P5jsOriginal},
        {label: "Tauri", icon: TauriOriginal},
        {label: "C#", icon: CsharpOriginal},
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6">
            {technologies.map(({label, icon: Icon}) => (
                <div
                    key={label}
                    className="flex flex-row items-center gap-4 p-3 bg-[#FFEDFB] shadow rounded-lg hover:scale-105 transform transition duration-300"
                >
                    <div className="p-1 transform scale-[2]">
                        <Icon/>
                    </div>
                    <span className="text-md font-semibold text-black">{label}</span>
                </div>
            ))}
        </div>
    );

}