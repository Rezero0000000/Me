<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
import "./TailwindCSS.svelte"
  import Home from "./page/Home.svelte";
  import Contact from "./page/Contact.svelte";
  import Project from "./page/Project.svelte";
  import About from "./page/About.svelte";

  const url = ""
</script>


<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">About</Link>
    <Link to="/project">About</Link>
    <Link to="/about">About</Link>
  </nav>
  <div>
    <Route path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/project" component={Project} />
    <Route path="/about" component={About} />
  </div>
</Router>


<main> 

  <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
  <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
  <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Badge</span>
  <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
  <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span>
  <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Badge</span>
  <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Badge</span>
  <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Badge</span>
</main>