
export default function CoreSkillSection(props:{className?:string}) {
    return (
        <div className={`${props.className} mockup-code`}>
                <pre data-prefix="$"><code>npm i core skills</code></pre>
                <pre data-prefix=">" className="text-warning"><code>Installing language ...</code></pre>
                <pre data-prefix=">" className="text-white"><code>Kotlin</code></pre>
                <pre data-prefix=">" className="text-white"><code>Java</code></pre>
                <pre data-prefix=">" className="text-white"><code>Dart</code></pre>
                <pre data-prefix=">" className="text-white"><code>Javascript</code></pre>
                <pre data-prefix=">" className="text-white"><code>C++</code></pre>
                <pre data-prefix=">" className="text-warning"><code>Installing frontend ...</code></pre>
                <pre data-prefix=">" className="text-white"><code>Android</code></pre>
                <pre data-prefix=">" className="text-white"><code>Kotlin Multiplatform</code></pre>
                <pre data-prefix=">" className="text-white"><code>Flutter</code></pre>
                <pre data-prefix=">" className="text-white"><code>React Native</code></pre>
                <pre data-prefix=">" className="text-white"><code>React.js</code></pre>
                <pre data-prefix=">" className="text-warning"><code>Installing backend ...</code></pre>
                <pre data-prefix=">" className="text-white"><code>Spring boot</code></pre>
                <pre data-prefix=">" className="text-white"><code>Node.js</code></pre>
                <pre data-prefix=">" className="text-white"><code>Nest.js</code></pre>
                <pre data-prefix=">" className="text-warning"><code>Installing database ...</code></pre>
                <pre data-prefix=">" className="text-white"><code>MongoDB</code></pre>
                <pre data-prefix=">" className="text-white"><code>MySQL</code></pre>
                <pre data-prefix=">" className="text-white"><code>SQLite</code></pre>
                <pre data-prefix=">" className="text-white"><code>Firebase</code></pre>
                <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>
    )
}