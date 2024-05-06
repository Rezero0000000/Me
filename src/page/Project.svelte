<script>
      let Projects = [
        {id:0,title:"LaraBlog", description:"A blog system made with Laravel",repo:"https://github.com/rezero00000/larablog",techs:["mysql", "php", "laravel", "tailwind"]},
        {id:1,title:"Ingfobase",description:"Mvc web application build with php native",repo:"https://github.com/rezero00000/ingfobase",techs:[ "mysql", "bootstrap","php" ]},
        {id:2,title:"Recrypt",description:"A cli apps to cryptography with classical method",repo:"https://github.com/rezero00000/recrypt",techs:["python"]},
        {id:3,title:"Trabot",description:"Landing page Travel application, with Beautiful UI",repo:"https://github.com/rezero00000/trabot",techs:[ "javascript", "react", "tailwind", "vite"]},
        {id:4,title:"NodeBlog",description:"A blog system with monolith architecture",repo:"https://github.com/rezero00000/nodeblog",techs:["javascript", "mysql","tailwind","expressLight"]},
        {id:5,title:"NoteApi",description:"An Rest-Api for managing notes",repo:"https://github.com/rezero00000/noteapi",techs:["javascript", "mysql","expressLight"]},
        {id:6,title:"Epicgames-Clone",description:"A web clone that was made using React.js",repo:"https://github.com/rezero00000/epicgames-clone",techs:["javascript", "react", "tailwind", "vite"]},
        {id:7,title:"MySite",description:"Personal Website for portofolio",repo:"https://github.com/rezero00000/mysite",techs:["javascript", "react", "tailwind", "vite"]},
    ];
</script>

<section class="md:px-32 lg:px-40 px-5 py-24 md:py-24 lg:py-28 xl:px-60">
    <div>
        <strong><h1 class="text-3xl md:text-4xl ">Projects</h1></strong>
        <div class="mt-3  border-b-2 border-dashed border-slate-400"></div>
        <p class="text-[12px] md:text-sm mt-2">List of my projects, I hope that I can create usefull app/software for many people 😁😎😀.</p>
        <article class="mt-10 md:grid md:grid-cols-2 md:gap-5">
        {#each Projects as project}
            <div class="bg-[#1A1B1F] p-5 rounded-lg mt-10 border border-[#323439] transition-all duration-200 hover:bg-[#323439] ease-in hover:-translate-y-2 dark:bg-[#F3F4F6] hover:dark:shadow-lg hover:dark:shadow-[#cbcdd0]" >
                <div>
                    <div class="flex items-center justify-between">
                        <strong><h1 class="text-xl">{project.title}</h1></strong>
                        <div class="flex items-center">
                            <a href={project.repo} target="blank">
                                <img loading="lazy" src="icons/forkLight.svg" class="w-5 h-5" alt="Fork" />
                            </a>
                        </div>
                    </div>
                    <p class="mt-7 mb-4 md:text-[14px] text-[12px]">{project.description}</p>
                    <ul class="flex gap-2">
                        <!-- {project.techs.map ((tech, index) => <li key={index}><img loading="lazy" class="w-6 h-6" src={`icons/${tech}.svg`} alt={tech.title} /></li>)} -->
                    </ul>
                </div>
                
            </div>
            
        {/each}
        </article>
    </div>
</section> 