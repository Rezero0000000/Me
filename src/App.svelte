<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
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
  <!-- <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">About</Link>
    <Link to="/project">About</Link>
    <Link to="/about">About</Link>
  </nav> -->
  <main>
    <Route path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/project" component={Project} />
    <Route path="/about" component={About} />
  </main>

  <Footer />

</Router>
