<script>
let contacts = [
    {id: 0, name:"Instagram", url:"https://instagram.com/", icons:"instagramLight"},
    {id: 1, name:"Linkedin", url:"https://www.linkedin.com/in/muhammad-raihan-alifiandra-380509271/", icons:"linkedinLight"},
    {id: 2, name:"Github", url:"https://github.com/rezero00000", icons:"githubLight"},
    {id: 3, name:"Whatsapp", url:"Wa.me/+6287741174222", icons:"whatsAppLight"},
];
</script>

<section class="md:px-32 lg:px-40 px-5 py-20 md:py-24 lg:py-28 xl:px-60 ">
    <strong><h1 class="text-2xl md:text-3xl mt-7 mb-3">Contact</h1></strong>
    <div class="mt-3  border-b-2 border- bdashedorder-slate-400"></div>
    <form action="" class="mt-10" >
        <input  autoComplete="off"  name="name" type="text" placeholder="Your Name" class="rounded-lg border-2 md:text-[14px] text-[12px] w-full shadow-[#42434a] dark:bg-[#F3F4F6] bg-[#1A1B1F]"/>
        <input  autoComplete="off"  name="name" type="text" placeholder="Your Name" class="rounded-lg border-2 md:text-[14px] text-[12px] w-full shadow-[#42434a] dark:bg-[#F3F4F6] bg-[#1A1B1F]"/>
        <input  autoComplete="off"  name="name" type="text" placeholder="Your Name" class="rounded-lg border-2 md:text-[14px] text-[12px] w-full shadow-[#42434a] dark:bg-[#F3F4F6] bg-[#1A1B1F]"/>
        <input  autoComplete="off"  name="name" type="text" placeholder="Your Name" class="rounded-lg border-2 md:text-[14px] text-[12px] w-full shadow-[#42434a] dark:bg-[#F3F4F6] bg-[#1A1B1F]"/>
        <button class="mt-5 dark:text-white text-[14px] bg-[#42434a] hover:dark:text-[#364252] hover:dark:bg-[#F3F4F6] dark:hover:border hover:dark:border-[#42434a] hover:text-white px-6  py-2 rounded-lg ">Send</button>
    </form>
    <div class="mt-7">
        <strong><h1 class="text-2xl md:text-3xl mb-3">Follow Me</h1></strong>
        <div class="mt-3  border-b-2 border-dashed border-slate-400"></div>
        <ul class="flex gap-3 mt-2">
        {#each contacts as contact}
            <li ><a href={contact.url} target="blank"> <img loading="lazy" src={`icons/${contact.icons}.svg`} class="w-6 h-6" alt={contact.name} /></a></li>    
        {/each }
        </ul>
    </div>
</section>