+++
title = "Hosting your own instance"
description = "Up and running in under a minute"
weight = 10
draft = false
toc = true
bref = "As a complete and self-sufficient web framework, Kube is here to help you get the most out of your daily work. Kube takes care of routine stuff, saving you precious time for things that you love. Starting up with Kube is ridiculously fast you can start in under a minute. Here's how to set up Kube, and what basic customization are available out-of-the-box"
+++

<h3 class="section-head" id="h-basic-template"><a href="#h-basic-template">Prerequisites</a></h3>

<p>The only prerequisites </p>

<h3 class="section-head" id="h-supported-browsers"><a href="#h-supported-browsers">Supported Browsers</a></h3>

<p>Kube supports the latest, stable releases of all major browsers:</p>
<ul>
    <li>Latest Chrome</li>
    <li>Latest Firefox</li>
    <li>Latest Safari</li>
    <li>Latest Opera</li>
    <li>Microsoft Edge</li>
    <li>Internet Explorer 11</li>
</ul>


<h3 class="section-head" id="h-development"><a href="#h-development">Development with Kube</a></h3>

<p>Kube has been designed to help you with web development, that's why it's so easy to use Kube when building websites. To move forward quickly and efficiently, just link <code>kube.scss</code> from Kube package: this file contains variables, mixins and everything you need to simplify daily routine tasks.
</p>

<p>
    For example, import kube.scss into your master.scss styles file, which you will later compile into <code>master.css</code>:
</p>

<pre class="code"><span class="hljs-comment">// master.scss</span>
@<span class="hljs-keyword">import</span> <span class="hljs-string">"dist/scss/kube.scss"</span>;</pre>

<p>
    Now all Kube's variables and mixins are readily available in <code>master.scss</code>,
    and you can use them whenever needed. For instance, here's how one of examples:
</p>

<pre class="code"><span class="hljs-comment">// master.scss</span>
<span class="hljs-keyword">@import</span> <span class="hljs-string">"dist/scss/kube.scss"</span>;

<span class="hljs-selector-id">#sidebar</span> {
    <span class="hljs-variable">@include</span> flex-item-width(<span class="hljs-number">200px</span>);
}</pre>

<p>Also, you could use settings from <code>variables.scss</code>:</p>


<pre class="code"><span class="hljs-comment">// master.scss</span>
@<span class="hljs-keyword">import</span> <span class="hljs-string">"dist/scss/kube.scss"</span>;

<span class="hljs-selector-id">#my-layout</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-variable">$base-line</span>;
}</pre>
