<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./page/Home.svelte";
  import Contact from "./page/Contact.svelte";
  import Project from "./page/Project.svelte";
  import About from "./page/About.svelte";
import Navbar from "./components/Navbar.svelte";
import Footer from "./components/Footer.svelte";
  const url = ""
</script>


<Router {url}>
<Navbar />
  <main>
    <Route path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Project} />
    <Route path="/about" component={About} />
  </main>
  <Footer />
</Router>
