{% extends "partials/main.njs" %}


{% block morehead %}
  <style>
    .elf-credits-ul {
      margin: 20px auto;
    }

    .elf-credits-ul li {
      margin: 10px auto;
    }

    .elf-credits-header {
      margin: 20px auto 40px;
    }
  </style>
{% endblock %}


{% block header %}
  <div class="container">
    <h2>Acknowledgements</h2>
  </div>
{% endblock %}


{% block body %}
  <div class="container">
    <div class="text-center elf-credits-header">
      <h1>Borrowed Images</h1>
    </div>

    <h3>CPU & GPU Architecture Slide Images</h3>
    <ul class="elf-credits-ul">
      <li>
        <a href="https://devblogs.nvidia.com/inside-pascal/" target="_blank">NVidia Pascal GP100 Streaming Multiprocessor</a>
      </li>
      <li>
        <a href="https://www.hpcwire.com/2008/09/10/compilers_and_more_gpu_architecture_and_applications/" target="_blank">NVidia GPU Architecture Diagram</a>
      </li>
      <li>
        <a href="https://arstechnica.com/gadgets/2009/09/intel-launches-all-new-pc-architecture-with-core-i5i7-cpus/" target="_blank">Intel Core i5/i7 Architecture Diagram</a>
      </li>
      <li>
        <a href="https://stackoverflow.com/questions/44331059/mips-pipeline-cpu-architecture" target="_blank">MIPS CPU Architecture Diagram</a>
      </li>
    </ul>

    <h3>Linux Slide Images</h3>
    <ul class="elf-credits-ul">
      <li>
        <a href="https://en.wikipedia.org/wiki/Linux" target="_blank">Linux Components Diagram</a>
      </li>
      <li>
        <a href="https://www.novicus.com/linux-logo-without-version-number-banner-sized/" target="_blank">Linux Logo</a>
      </li>
      <li>
        <a href="https://www.omgubuntu.co.uk/2018/01/linux-mint-19-release-features" target="_blank">Linux Mint Logo</a>
      </li>
    </ul>

    <h3>Parallel Programming Slide Images</h3>
    <ul class="elf-credits-ul">
      <li>
        <a href="https://en.wikipedia.org/wiki/OpenCL" target="_blank">OpenCL Logo</a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/OpenMP" target="_blank">OpenMP Logo</a>
      </li>
      <li>
        <a href="https://www.hpcwire.com/2017/05/01/mpi-25-years-old/" target="_blank">MPI Logo</a>
      </li>
      <li>
        <a href="https://nvidianews.nvidia.com/file?fid=544a60fef6091d588d000046" target="_blank">NVidia CUDA Logo</a>
      </li>
      <li>
        <a href="https://developer.nvidia.com/openacc-courses" target="_blank">OpenACC Logo</a>
      </li>
    </ul>

    <h3>Runescape Images</h3>
    <ul class="elf-credits-ul">
      <li>
        All of them taken from the amazing <a href="https://runescape.wiki/" target="_blank">Runescape Wikia</a>
      </li>
    </ul>

    <h3>Machine Learning Slide Images</h3>
    <ul class="elf-credits-ul">
      <li>
        <a href="http://scikit-learn.org/stable/modules/neural_networks_supervised.html" target="_blank">Multilayer Perceptron Diagram</a>
      </li>
      <li>
        <a href="https://medium.freecodecamp.org/an-intuitive-guide-to-convolutional-neural-networks-260c2de0a050" target="_blank">Convolutional Network Diagram</a>
      </li>
      <li>
        <a href="https://doi.org/10.1016/B978-0-444-52936-7.50016-1" target="_blank">Generalization Bound for Classificators</a>
      </li>
    </ul>

    <h3>SVG Icons</h3>
    <ul class="elf-credits-ul">
      <li>
        Many of them are from the <a href="https://octicons.github.com/" target="_blank">Octicons</a>. Thanks to GitHub for that.
      </li>
      <li>
        National flag icons were made by <a href="https://github.com/lipis/flag-icon-css">lipis</a>.
      </li>
    </ul>

  </div>

  <div class="container">
      <div class="text-center elf-credits-header">
        <h1>Special Thanks</h1>
      </div>

      <p>
        I want to make use of this section to offer some special thanks, not to tools or people who helped building this website,
        but to those who contributed very positively (from my viewpoint) to the construction of my own self. Incidentally or not,
        most of these people are teachers or professors.
      </p>

      <p>
        I'll begin by thanking <strong>teacher Maria Helena</strong>, which was my mathematics teacher by the end of middle school in Colégio São Paulo,
          in the city of Teresópolis.
        During class, she taught mathematics with due rigour, with which I hadn't ever had contact before.
        I strongly believe her classes were responsible for making me finally realize the importance of mathematics, and maybe even the
          importance of science in general.
        Maybe because of her, I followed a road where I'd end up wanting to be a researcher.
        Thank you.
      </p>

      <p>
        I'd like to thank another teacher I had in Colégio São Paulo by the end of middle school, <strong>teacher Edson Chiote Pinheiro</strong>.
        He was a very good biology teacher, and always made it feel like he loved the subject.
        At some moment in every class, he would say "Isn't biology beautiful?", while honestly seeming to nourish such feelings towards biology.
        I'm sure he contributed a lot for making me, today, see beauty in natural sciences (biology, physics and chemistry) and knowledge in general.
      </p>

      <p>
        Thanks, also, to 2 teachers I had during high school in Colégio pH in Rio de Janeiro: history <strong>teacher Luiz Antônio Simas</strong>
          and literature <strong>teacher Filipe Couto</strong>.
        Both of them worked really hard to teach while connecting the subject with the real world, and also making students interested in
          the subject.
        They managed to do all of these tasks extremely well, and I can't thank them enough for making me learn so much in so short of a time.
      </p>

      <p>
        I had Introduction to Computer Science 1 with <strong>Professor Rodrigo Mello</strong> in Universidade de São Paulo.
        To teach the concepts that should be taught during such course, he used many examples from many different areas of computer science.
        He usually delved relatively deep in these examples, and it always felt like he really enjoyed computer science and wanted to share
          with his students every bit of knowledge he has; and he has a really large amount of it.
        Since it was my first semester in the university, and I had just changed from chemical engineering to computer science, I still wasn't
          much confident that I wanted to follow the computer science path.
        Thanks to his classes, though, I got extremely interested in computers, and today I'm sure this is the right path for me.
        Thank you a lot.
      </p>
  </div>
{% endblock %}
