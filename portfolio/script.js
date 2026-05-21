// NAVIGATION CONTROL ENGINES
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

function closeMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.remove('open');
}

// SCROLL INTERSECTION OBSERVER PIPELINE
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
});

// MARQUEE DUPLICATION LOGIC
const ticker = document.querySelector('.tech-scroll-inner');
if (ticker) {
  const nodes = ticker.innerHTML;
  ticker.innerHTML = nodes + nodes + nodes; 
}

// INTERACTIVE SHELL EXECUTION ENVIRONMENT
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const terminalBody = document.getElementById('terminalBody');

if (terminalBody && terminalInput) {
  terminalBody.addEventListener('click', () => terminalInput.focus());

  const commandDirectory = {
    help: () => `Available commands:<br>
      &nbsp;&nbsp;<span class="highlight">about</span>&nbsp;&nbsp;&nbsp;&nbsp;- Print background parameters<br>
      &nbsp;&nbsp;<span class="highlight">skills</span>&nbsp;&nbsp;&nbsp;- Output cluster capabilities profile<br>
      &nbsp;&nbsp;<span class="highlight">projects</span>&nbsp;- Enumerate core technical blueprints<br>
      &nbsp;&nbsp;<span class="highlight">certs</span>&nbsp;&nbsp;&nbsp;&nbsp;- Display certification tokens<br>
      &nbsp;&nbsp;<span class="highlight">clear</span>&nbsp;&nbsp;&nbsp;&nbsp;- Purge history context data`,
    
    about: () => `DevOps Engineer based out of Chennai, India.<br>
      Sustained specialization in infrastructure topology provision execution via HashiCorp Terraform modules, declarative multi-tenant container automation deployment on AKS/EKS targets, and deep logging telemetry stack orchestration.`,
    
    skills: () => `Capability Manifest:<br>
      &nbsp;&nbsp;• Orchestration : Kubernetes, Helm, Docker Container Runtimes<br>
      &nbsp;&nbsp;• Infra-as-Code : HashiCorp Terraform modules<br>
      &nbsp;&nbsp;• Automation Pipelines : GitHub Actions, PowerShell orchestration modules, Python analytics scripting<br>
      &nbsp;&nbsp;• Telemetry Analysis : New Relic Engine, NRQL queries, Prometheus ecosystems, Elasticsearch`,
    
    projects: () => `Blueprint Registry:<br>
      &nbsp;&nbsp;1. Traefik Ingress Migration -> Ingress infrastructure swap with zero-packet-drop cutover metrics.<br>
      &nbsp;&nbsp;2. Reusable AKS Modules -> Production-grade Terraform baseline files capturing strict network access layers.`,
    
    certs: () => `Registry Credentials Verification:<br>
      &nbsp;&nbsp;• Token : Certified Kubernetes Administrator (CKA)<br>
      &nbsp;&nbsp;• Scope ID : 9ee43339-e57e-4a22-9a57-9df418aa4ba8<br>
      &nbsp;&nbsp;• Duration : Aug 2025 – Aug 2027 [Status: Active Verified System Node]`,
    
    clear: () => {
      terminalOutput.innerHTML = '';
      return '';
    }
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCommand = terminalInput.value.trim();
      const cleanCommand = rawCommand.toLowerCase();
      
      if (rawCommand.length > 0) {
        // Render execution call record entry
        const promptBlock = document.createElement('div');
        promptBlock.className = 't-prompt';
        promptBlock.innerHTML = `[naveen@platform-ops:~]$ <span class="t-cmd">${rawCommand}</span>`;
        terminalOutput.appendChild(promptBlock);

        // Process matching command lookup execution block
        if (commandDirectory[cleanCommand]) {
          const outText = commandDirectory[cleanCommand]();
          if (outText) {
            const outBlock = document.createElement('div');
            outBlock.className = 't-info';
            outBlock.innerHTML = outText;
            terminalOutput.appendChild(outBlock);
          }
        } else {
          const errBlock = document.createElement('div');
          errBlock.className = 't-info';
          errBlock.innerHTML = `sys-shell: command lookup error target not found: '<span style="color:#ef4444">${rawCommand}</span>'. Input <span class="highlight">help</span> for scope definition mapping rules.`;
          terminalOutput.appendChild(errBlock);
        }
        
        // Output breathing line separator space
        const spaceBreak = document.createElement('br');
        terminalOutput.appendChild(spaceBreak);
      }
      
      // Clean target processing scope and shift cursor view tracking point
      terminalInput.value = '';
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });
}