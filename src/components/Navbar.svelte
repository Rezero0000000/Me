<script>
    import {writable} from "svelte/store";
    const openStore = writable(false);

    let Links = [
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Projects",link:"/projects"},
        {name:"Contact",link:"/contact"},
      ];

    // let [open,setOpen]=useState(false);
    // const genericHamburgerLine = `h-[2px] w-5 my-[3px] bg-[#9CA2AE] transition ease transform duration-300`;
    
    
    export const lightMode = writable(false);

    export function setLightMode(value) {
    lightMode.set(value);
    }

    function changeMode () {
      if (lightMode) {
        console.log("mati")

        // localStorage.setItem("theme", "light");
        // window.document.documentElement.classList.remove("dark");
      } else {
        console.log("mati")
        // localStorage.setItem("theme", "dark");
        // window.document.documentElement.classList.add("dark");
      }
      setLightMode(!lightMode);
    }

</script>

<nav class='w-full z-50 fixed bg-[#1f2025] dark:shadow-lg  dark:shadow-[#e6e8ea] dark:bg-[#F3F4F6]'>
  <div  class={`md:flex items-center h-16 md:px-10 transition-all duration-500 ease-in ${
    open 
      ? 'dark:shadow-[#e6e8ea] shadow-lg shadow-[#141517] md:bg-transparent md:shadow-none' 
      : 'shadow-none'
  }`}> 
        <div class={ `font-[700] text-2xl mr-20 cursor-pointer absolute hidden md:block flex py-[14px] items-center `}>
          <div class="flex ">
              <h4 class={` mt-1 text-xl `}>Rezero0000000</h4>
          </div>
        </div> 
 <!--
        <div onClick={()=>setOpen(!open)} class='absolute left-3 top-[0.9rem] cursor-pointer md:hidden'>
          <div name={open ? 'close':'menu'} class="w-5 ">
            <button class="flex flex-col h-10 w-10 rounded justify-center items-center group">
              <div class={`${genericHamburgerLine} ${
                open
                    ? "rotate-[43deg] translate-y-2 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
              }`}
              ></div>
              <div class={`${genericHamburgerLine} ${open ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
            <div class={`${genericHamburgerLine} ${
                    open
                        ? "-rotate-[42deg] -translate-y-2 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
            </button>
          </div>
        </div>
    -->
    
        <div class="flex absolute right-3 top-[1.5rem] ">
            <input type="checkbox" class="hidden" id="dark-toggle" on:click={changeMode}/>
            <label htmlFor="dark-toggle">
            <div class="flex h-[19px] w-8 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                <div class={`toggle-circle h-[14px] w-[14px] rounded-full bg-white transition duration-300 ease-in-out ${lightMode ? "translate-x-[0.6rem]":""}`}></div>
            </div>
            </label>
        </div>        
      <ul class="md:flex md:items-center md:pr-20 md:pb-0 pb-12 mx-auto absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
        <!-- {open ?  'top-14 shadow-lg shadow-[#141517] md:shadow-none md:bg-transparent dark:shadow-[#e6e8ea] dark:bg-[#e6e8ea] bg-[#141517] ':'top-[-490px]  md:bg-transparent'}`}> -->
        
      {#each  Links as link }
        
            <li key={link.name} class='md:ml-8  md:my-0 xs:my-10 my-8  '>
              <a href={link.link}  class='duration-500 xs:text-normal text-sm'>{link.name}</a>
            </li>
      {/each}
       
        
        <div class='md:hidden block'>
          <a href="https://github.com/rekun-dev" target="blank" class=" xs:text-normal text-sm">Github</a>
        </div>
      </ul>
       
      </div>
    </nav>