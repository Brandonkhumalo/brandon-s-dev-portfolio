const TumaGoArchitecture = () => (
  <svg
    viewBox="0 0 800 525"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    aria-label="TumaGo System Architecture"
  >
    <defs>
      <marker id="arrowGreen" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="#34d399" />
      </marker>
      <marker id="arrowIndigo" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="#818cf8" />
      </marker>
    </defs>

    {/* Background */}
    <rect width="800" height="525" fill="#080d14" rx="14" />

    {/* Layer band backgrounds */}
    <rect x="8" y="14" width="784" height="72" rx="6" fill="#ffffff03" />
    <rect x="8" y="120" width="784" height="72" rx="6" fill="#ffffff03" />
    <rect x="8" y="228" width="784" height="72" rx="6" fill="#ffffff03" />
    <rect x="8" y="344" width="784" height="68" rx="6" fill="#ffffff03" />
    <rect x="8" y="452" width="784" height="58" rx="6" fill="#ffffff03" />

    {/* Layer labels */}
    <text x="18" y="56"  fill="#374151" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="1">MOBILE</text>
    <text x="18" y="163" fill="#374151" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="1">GATEWAY</text>
    <text x="18" y="270" fill="#374151" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="1">SERVICES</text>
    <text x="18" y="383" fill="#374151" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="1">DATA</text>
    <text x="18" y="483" fill="#374151" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="1">INFRA</text>

    {/* ─── ARROWS ─── */}

    {/* Mobile → Gateway */}
    <line x1="210" y1="86" x2="335" y2="120" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowGreen)" />
    <line x1="590" y1="86" x2="465" y2="120" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowGreen)" />

    {/* Gateway → Services */}
    <line x1="318" y1="192" x2="160" y2="228" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowGreen)" />
    <line x1="370" y1="192" x2="320" y2="228" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowGreen)" />
    <line x1="430" y1="192" x2="500" y2="228" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowGreen)" />
    <line x1="482" y1="192" x2="650" y2="228" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowGreen)" />

    {/* Services → Data */}
    <line x1="160" y1="300" x2="172" y2="344" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowIndigo)" />
    <line x1="320" y1="300" x2="385" y2="344" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowIndigo)" />
    <line x1="500" y1="300" x2="415" y2="344" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowIndigo)" />
    <line x1="650" y1="300" x2="630" y2="344" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowIndigo)" />

    {/* ─── BOXES ─── */}

    {/* Client App */}
    <rect x="130" y="22" width="160" height="58" rx="8" fill="#78C25712" stroke="#78C257" strokeWidth="1.5" />
    <text x="210" y="44"  textAnchor="middle" fill="#78C257" fontSize="12" fontWeight="bold" fontFamily="monospace">Client App</text>
    <text x="210" y="60"  textAnchor="middle" fill="#6b7280" fontSize="10" fontFamily="monospace">Android · Java</text>
    <text x="210" y="74"  textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Google Maps · FCM</text>

    {/* Driver App */}
    <rect x="510" y="22" width="160" height="58" rx="8" fill="#78C25712" stroke="#78C257" strokeWidth="1.5" />
    <text x="590" y="44"  textAnchor="middle" fill="#78C257" fontSize="12" fontWeight="bold" fontFamily="monospace">Driver App</text>
    <text x="590" y="60"  textAnchor="middle" fill="#6b7280" fontSize="10" fontFamily="monospace">Android · Java</text>
    <text x="590" y="74"  textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Live GPS · Earnings</text>

    {/* API Gateway */}
    <rect x="215" y="128" width="370" height="58" rx="8" fill="#00ADD812" stroke="#00ADD8" strokeWidth="1.5" />
    <text x="400" y="150" textAnchor="middle" fill="#00ADD8" fontSize="13" fontWeight="bold" fontFamily="monospace">Go + Echo API Gateway</text>
    <text x="400" y="168" textAnchor="middle" fill="#6b7280" fontSize="10" fontFamily="monospace">JWT Auth · Rate Limiting · WebSocket Routing</text>
    <text x="400" y="181" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Reverse Proxy · Internal Route Protection</text>

    {/* Django REST */}
    <rect x="68" y="236" width="184" height="58" rx="8" fill="#44B78B12" stroke="#44B78B" strokeWidth="1.5" />
    <text x="160" y="257" textAnchor="middle" fill="#44B78B" fontSize="11" fontWeight="bold" fontFamily="monospace">Django REST</text>
    <text x="160" y="273" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Business Logic · Payments</text>
    <text x="160" y="286" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Auth · PayNow · Admin</text>

    {/* Go Location */}
    <rect x="268" y="236" width="164" height="58" rx="8" fill="#00ADD812" stroke="#00ADD8" strokeWidth="1.5" />
    <text x="350" y="257" textAnchor="middle" fill="#00ADD8" fontSize="11" fontWeight="bold" fontFamily="monospace">Go Location</text>
    <text x="350" y="273" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">WebSocket Streams</text>
    <text x="350" y="286" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Redis GEO Updates</text>

    {/* Go Matching */}
    <rect x="448" y="236" width="164" height="58" rx="8" fill="#00ADD812" stroke="#00ADD8" strokeWidth="1.5" />
    <text x="530" y="257" textAnchor="middle" fill="#00ADD8" fontSize="11" fontWeight="bold" fontFamily="monospace">Go Matching</text>
    <text x="530" y="273" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Proximity Engine</text>
    <text x="530" y="286" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Dramatiq Workers</text>

    {/* FastAPI */}
    <rect x="568" y="236" width="164" height="58" rx="8" fill="#00968812" stroke="#26a69a" strokeWidth="1.5" />
    <text x="650" y="257" textAnchor="middle" fill="#26a69a" fontSize="11" fontWeight="bold" fontFamily="monospace">FastAPI</text>
    <text x="650" y="273" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Notification Service</text>
    <text x="650" y="286" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Async I/O · FCM</text>

    {/* PostgreSQL */}
    <rect x="68" y="352" width="188" height="52" rx="8" fill="#33679112" stroke="#4a90d9" strokeWidth="1.5" />
    <text x="162" y="373" textAnchor="middle" fill="#4a90d9" fontSize="11" fontWeight="bold" fontFamily="monospace">PostgreSQL</text>
    <text x="162" y="389" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">+ PgBouncer · Primary DB</text>
    <text x="162" y="399" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Orders · Users · Drivers</text>

    {/* Redis GEO */}
    <rect x="308" y="352" width="184" height="52" rx="8" fill="#DC382D12" stroke="#DC382D" strokeWidth="1.5" />
    <text x="400" y="373" textAnchor="middle" fill="#DC382D" fontSize="11" fontWeight="bold" fontFamily="monospace">Redis GEO</text>
    <text x="400" y="389" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Driver Locations · Cache</text>
    <text x="400" y="399" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Proximity Search · Queues</text>

    {/* Firebase FCM */}
    <rect x="544" y="352" width="188" height="52" rx="8" fill="#FFCA2812" stroke="#FFCA28" strokeWidth="1.5" />
    <text x="638" y="373" textAnchor="middle" fill="#FFCA28" fontSize="11" fontWeight="bold" fontFamily="monospace">Firebase FCM</text>
    <text x="638" y="389" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Push Notifications</text>
    <text x="638" y="399" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Real-time Messaging</text>

    {/* Docker / Kubernetes */}
    <rect x="68" y="460" width="268" height="44" rx="8" fill="#326CE512" stroke="#326CE5" strokeWidth="1.5" />
    <text x="202" y="479" textAnchor="middle" fill="#326CE5" fontSize="11" fontWeight="bold" fontFamily="monospace">Docker · Kubernetes</text>
    <text x="202" y="496" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Nginx · AWS EC2/RDS · GitHub Actions</text>

    {/* Prometheus / Grafana */}
    <rect x="464" y="460" width="268" height="44" rx="8" fill="#E6522C12" stroke="#E6522C" strokeWidth="1.5" />
    <text x="598" y="479" textAnchor="middle" fill="#E6522C" fontSize="11" fontWeight="bold" fontFamily="monospace">Prometheus · Grafana</text>
    <text x="598" y="496" textAnchor="middle" fill="#6b7280" fontSize="9"  fontFamily="monospace">Metrics · Monitoring · Alerting</text>

    {/* Footer */}
    <text x="400" y="518" textAnchor="middle" fill="#1f2937" fontSize="8" fontFamily="monospace" letterSpacing="2">TUMAGO — SYSTEM ARCHITECTURE</text>
  </svg>
);

export default TumaGoArchitecture;
