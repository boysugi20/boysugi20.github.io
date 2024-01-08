(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5433:function(e,s,i){Promise.resolve().then(i.bind(i,3022))},3022:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return j}});var a=i(7437),t=i(2265),n=i(1396),o=i.n(n),r=i(3648),l=i(9845),c=i(1763),d=i(9013),m=i(6802),h=i(4994),p=i(1507),u=i(2765),g=i(853),f=i(1181),x=i(7101),v=i(1176),b=[{id:1,title:"Sukajastip",link:"https://sukajastip.com",image:"/project-images/sukajastip/sukajastip.png",short_desc:"A shopping assistance service for accessing millions of products from Chinese marketplace platforms.",desc:"\nSUKAJASTIP is your go-to shopping assistance service for accessing millions of products from various marketplace platforms in China. Whether you're looking for unique items, great deals, or specific products, we've got you covered. This platform simplifies the process of shopping from China and offers a wide range of features to enhance your shopping experience.\n\n&nbsp;\n\nAs the developer of this platform, I take pride in managing every aspect of our infrastructure. I host SUKAJASTIP on my VPS (Virtual Private Server) and use Docker containers for efficient deployment and scaling. The ETL (Extract, Transform, Load) process is meticulously crafted to ensure the latest product information is at your fingertips. I accomplish this by scraping data from various sources and utilizing APIs to populate our MySQL database, which I've designed and built for optimal performance.\n\n&nbsp;\n\nBehind the scenes, I employ Scrapy, a powerful web scraping framework, integrated with our Django website to gather the most up-to-date product listings and details. Elasticsearch powers the robust search engine, making it easy for you to find exactly what you're looking for. I understand the importance of effective management, which is why I've developed an intuitive admin panel. This panel allows administrators to oversee product listings, transactions, and overall platform performance, ensuring a seamless experience for our users. Additionally, I take website reliability seriously. I've set up an uptime monitoring system using Kuma on our local Raspberry Pi. This ensures that SUKAJASTIP is always available when you need it, and I can swiftly address any downtime issues.\n		",tags:["AlpineJS","HTMX","Django"],skills:["Python","Django","AlpineJS","HTMX","Docker","Web Hosting","Elasticsearch","MySQL"],images:[{src:"/project-images/sukajastip/sukajastip.png"},{src:"/project-images/sukajastip/sukajastip-product-detail.png"},{src:"/project-images/sukajastip/sukajastip-cart-popup.png"},{src:"/project-images/sukajastip/sukajastip-cart-page.png"},{src:"/project-images/sukajastip/sukajastip-transaction-page.png"}]},{id:2,title:"Stocksforu",image:"/project-images/stocksforu/stocksforu-home.png",short_desc:"A website that aids in the analysis of stock data, with features including a 15 minute stock data delay and automated analysis",desc:"\nThis website was created as a personal project with the purpose of facilitating the analysis of stocks. It provides users with the current view of the Indonesian stock market through charts and data, with a 15-minute delay. The platform boasts a user-friendly interface, making it easy for users to access and understand the information needed for informed investment decisions. Whether you are an experienced investor or just starting out, this website serves as an excellent resource for staying ahead in the stock market. Additionally, using machine learning, the website offers automated analysis including automatic support and resistance level generation, daily stock recommendations, and technical analysis widgets from TradingView. The website also provides news on individual stocks, which is sourced from multiple websites through web scraping. This website also features tools to track trading activities and watchlists\n\n&nbsp;\n\nThe website utilizes the TradingView chart library to display stock prices, MidTrans for payment processing, ChartJS for chart displays, and various Python libraries for web scraping. It is built using the Django web framework and PostgreSQL as the database, with a Python script continuously updating the database through web scraping. The website was initially hosted on DigitalOcean, but has since been self-hosted on a Raspberry Pi with Cloudflare tunnel for public access.\n		",tags:["Payment Gateway","Machine Learning","ChartJS"],skills:["Django","Python","Payment Gateway","Machine Learning","ChartJS"],images:[{src:"/project-images/stocksforu/stocksforu-home.png"},{src:"/project-images/stocksforu/stocksforu-detail.png"},{src:"/project-images/stocksforu/stocksforu-watchlist.png"},{src:"/project-images/stocksforu/stocksforu-tradingplan.png"}]},{id:3,title:"Bandarmologi Bot",image:"/project-images/bandarmologi/bandarmologi.png",link:"https://github.com/boysugi20/bandarmologi-bot-final",short_desc:"CLI based stocks data analytics tools",desc:"\nA Command Line Interface (CLI) tool developed using Python for stock data analysis, this software uses Selenium and Tor Browser for anonymous web scraping to gather the necessary market data for analysis. With this tool, users can analyze stocks based on market maker actions, including accumulation or distribution patterns, by utilizing weekly or daily data. Additionally, the tool is capable of calculating the top N stocks in the Indonesian stock market for both accumulation and distribution. Another feature of the tool is the ability to identify stocks with sudden spikes in trading volume, indicating potential abnormal transactions.\n		",tags:["Python","Automation","Selenium"],skills:["Python","Automation","Selenium"],images:[{src:"/project-images/bandarmologi/bandarmologi.png"}]},{id:4,title:"Home Lab",image:"/project-images/homelab/homelab.png",short_desc:"Self-hosted services aimed to provide assistance to everyday tasks",desc:"\nA self-hosted server running on a Raspberry Pi containing several services that are usefull or convenient to have for me. The services was run on docker containers which is managed using Portainer. Because the network where the Raspbery Pi is connected is using Carrier-grade NAT and does not provide public IP address, a VPN and Cloudflare tunnel was utilized for access from outside the local network. Tailscalce VPN service is used to provide secure connection to a selected services which is not open for public access. For services that are safe for public access, CLoudflare tunnel was used.\n\n&nbsp;\n\nServices running on the server include Tachidesk (for manga reading), Jellyfin (for media serving), Radarr (for movie management), Sonarr (for TV show management), Guacamole (for remote SSH and VNC access through browsers), Glances and Grafana (for server monitoring), KASM (to create disposable isolated workspaces), and Snippet Box (for saving code snippets)		\n		",tags:["Docker","Network","Portainer","VPN"],skills:["Docker","Network","Portainer","VPN","Raspberry Pi"],images:[{src:"/project-images/homelab/homelab.png"}]}],w=[{category:"Language",list:[{name:"Python",image:"/icons/python.svg",color:"#3776AB"},{name:"HTML",image:"/icons/html.svg",color:"#E34F26"},{name:"CSS",image:"/icons/css.svg",color:"#1572B6"},{name:"JavaScript",image:"/icons/javascript.svg",color:"#F7DF1E"}]},{category:"Web Framework",list:[{name:"Django",image:"/icons/django.svg",color:"#43B02A"},{name:"Next JS",image:"/icons/nextjs.svg",color:"#FFFFFF"},{name:"Alpine JS",image:"/icons/alpinejs.svg",color:"#8BC0D0"},{name:"HTMX",image:"/icons/htmx.svg",color:"#F7DF1E"},{name:"Tailwind CSS",image:"/icons/tailwindcss.svg",color:"#06B6D4"}]},{category:"Scraping",list:[{name:"Selenium",image:"/icons/selenium.svg",color:"#43B02A"},{name:"Scrapy",image:"/icons/scrapy.svg",color:"#60A839"},{name:"Playwright",image:"/icons/playwright.svg",color:"#2EAD33"}]},{category:"Tools",list:[{name:"Elasticsearch",image:"/icons/elasticsearch.svg",color:"#005571"}]},{category:"Devops",list:[{name:"Docker",image:"/icons/docker.svg",color:"#2496ED"}]},{category:"Database",list:[{name:"MySQL",image:"/icons/mysql.svg",color:"#4479A1"},{name:"Azure Cosmos",image:"/icons/azurecosmos.svg",color:"#0078D7"},{name:"Microsoft SQL",image:"/icons/microsoftsqlserver.svg",color:"#CC2927"},{name:"PostgreSQL",image:"/icons/postgresql.svg",color:"#4169E1"}]}];function j(){let[e,s]=(0,t.useState)(!1);(0,t.useEffect)(()=>{(0,x.bP)(async e=>{await (0,v.S)(e)}).then(()=>{s(!0)})},[]);let i=(0,t.useMemo)(()=>({fpsLimit:60,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"}},modes:{push:{quantity:2},repulse:{distance:100,duration:2}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:100,enable:!0,opacity:.2,width:1},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:2,straight:!1},number:{density:{enable:!0},value:80},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0}),[]);return(0,a.jsxs)("div",{children:[(0,a.jsx)(x.ZP,{id:"tsparticles",options:i}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2 justify-center items-start py-20 lg:py-0 px-4 lg:px-20 lg:h-[100vh] lg:sticky lg:top-[4rem]",children:[(0,a.jsx)("h1",{className:"inline-block mb-2 text-5xl font-extrabold text-transparent uppercase animate-gradient bg-gradient-to-r from-fuchsia-700 to-pink-500 bg-clip-text ",children:"BOY SUGIJAKKO"}),(0,a.jsx)("div",{className:"grid grid-cols-4 auto-cols-min",children:(0,a.jsxs)("div",{className:"container flex flex-col justify-center col-span-4 row-span-3 w-fit",children:[(0,a.jsx)("div",{className:"mb-4 text-white",children:"Hey, I'm a software whiz who loves turning cool ideas into awesome software. Let's team up and bring your visions to life!"}),(0,a.jsx)(o(),{href:"/downloads/cv.pdf",passHref:!0,children:(0,a.jsx)(r.A,{color:"default",variant:"solid",size:"sm",className:"font-bold uppercase rounded-lg w-fit",children:"Download CV"})})]})}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(o(),{target:"_blank",href:"https://github.com/boysugi20",children:(0,a.jsx)(r.A,{isIconOnly:!0,className:"container cursor-pointer w-14 h-14",children:(0,a.jsx)(c.J,{radius:"none",className:"object-contain w-full h-full invert-filter",src:"/icons/github.svg",alt:"github"})})}),(0,a.jsx)(o(),{target:"_blank",href:"https://www.linkedin.com/in/boy-sugijakko/",rel:"noopener noreferrer",children:(0,a.jsx)(r.A,{isIconOnly:!0,className:"container cursor-pointer w-14 h-14",children:(0,a.jsx)(c.J,{radius:"none",className:"object-contain w-full h-full invert-filter",src:"/icons/linkedin.svg",alt:"linkedin"})})}),(0,a.jsx)(o(),{target:"_blank",href:"https://discordapp.com/users/1116629940276830208",rel:"noopener noreferrer",children:(0,a.jsx)(r.A,{isIconOnly:!0,className:"container cursor-pointer w-14 h-14",children:(0,a.jsx)(c.J,{radius:"none",className:"object-contain w-full h-full invert-filter",src:"/icons/discord.svg",alt:"discord"})})})]})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-start px-4 pb-10 lg:pt-20 lg:px-20",children:[(0,a.jsxs)(l.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{ease:"easeOut",duration:.1},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:.9}},className:"container",children:[(0,a.jsx)("h2",{className:"mb-2 text-xl font-bold",children:"Let me introduce myself,"}),(0,a.jsx)("p",{children:"As a software engineer, I excel in designing, developing, and testing software applications to meet user needs. My strong background in computer science and passion for problem-solving enable me to troubleshoot and debug efficiently. Proficient in multiple programming languages, I create robust and scalable software solutions. Whether working independently or in a team, my dedication ensures the delivery of high-quality software that meets or exceeds customer expectations."})]}),(0,a.jsxs)(l.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{ease:"easeOut",duration:.1},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:.9}},children:[(0,a.jsx)("div",{className:"mt-6 mb-2 text-2xl font-bold text-left",children:"Skills"}),(0,a.jsxs)(d.n,{"aria-label":"Options",variant:"underlined",fullWidth:!0,classNames:{tabList:"gap-6 w-full relative rounded-none p-0 border-b border-divider",cursor:"w-full bg-fuchsia-600",tab:"max-w-fit px-0 h-12",tabContent:"group-data-[selected=true]:text-fuchsia-600 group-data-[selected=true]:font-bold"},children:[(0,a.jsx)(m.r,{title:"All",children:(0,a.jsx)("div",{className:"grid grid-cols-4 gap-2 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7",children:w.map((e,s)=>(0,a.jsx)(a.Fragment,{children:e.list.map((e,s)=>(0,a.jsxs)(h.w,{radius:"none",className:"container-thin",style:{border:"color"in e?"2px solid":"none",borderColor:"color"in e?e.color:void 0},children:[(0,a.jsx)(p.G,{className:"flex items-center justify-center p-4 overflow-visible lg:p-6",children:(0,a.jsx)(c.J,{className:"object-contain w-full h-full invert-filter",src:"".concat(e.image),radius:"none",alt:e.name})}),(0,a.jsx)("span",{className:"w-full pb-1 text-xs text-center text-white",children:e.name})]},e.name))}))})},"all"),w.map((e,s)=>(0,a.jsx)(m.r,{title:e.category,children:(0,a.jsx)("div",{className:"grid grid-cols-4 gap-2 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7",children:e.list.map((e,s)=>(0,a.jsxs)(h.w,{radius:"none",className:"container-thin",style:{border:"color"in e?"2px solid":"none",borderColor:"color"in e?e.color:void 0},children:[(0,a.jsx)(p.G,{className:"p-4 overflow-visible lg:p-6",children:(0,a.jsx)(c.J,{className:"object-contain w-full h-full invert-filter",src:"".concat(e.image),radius:"none",alt:e.name})}),(0,a.jsx)("span",{className:"w-full pb-1 text-xs text-center text-white",children:e.name})]},e.name))})},e.category))]})]}),(0,a.jsxs)(l.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{ease:"easeOut",duration:.1},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:.9}},children:[(0,a.jsx)("div",{className:"mt-6 mb-3 text-2xl font-bold text-left",children:"Experience"}),(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)(l.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{ease:"easeOut",duration:.1},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:.9}},className:"flex flex-col gap-2",children:(0,a.jsxs)("div",{className:"container h-fit",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"font-bold text-md",children:"SENIOR SYSTEM ANALYST"}),(0,a.jsx)("div",{className:"text-xs",children:"Bina Nusantara IT Division"})]}),(0,a.jsx)("div",{className:"pt-1 text-xs whitespace-nowrap",children:"OCT 2022 - PRESENT"})]}),(0,a.jsxs)("ul",{className:"pl-3 mt-3 text-sm list-disc",children:[(0,a.jsx)("li",{children:"Manage project timelines"}),(0,a.jsx)("li",{children:"Design applications that are efficient to improve user experience and reduce system load"}),(0,a.jsx)("li",{children:"Provide documentation (Data Flow Diagram, Entity Relationship Diagram, and Deployment Documents)"})]})]})}),(0,a.jsx)(l.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{ease:"easeOut",duration:.1},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:.9}},className:"flex flex-col gap-2",children:(0,a.jsxs)("div",{className:"container h-fit",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"font-bold text-md",children:"SYSTEM ANALYST"}),(0,a.jsx)("div",{className:"text-xs",children:"Bina Nusantara IT Division"})]}),(0,a.jsx)("div",{className:"pt-1 text-xs whitespace-nowrap",children:"OCT 2021 - OCT 2022"})]}),(0,a.jsxs)("ul",{className:"pl-3 mt-3 text-sm list-disc",children:[(0,a.jsx)("li",{children:"Manage project timelines"}),(0,a.jsx)("li",{children:"Debug, fix, or enhance Stored Procedures used in application to fetch data from database"}),(0,a.jsx)("li",{children:"Analyze requirements based on user needs"}),(0,a.jsx)("li",{children:"Collaborate with programmers to develop new features"}),(0,a.jsx)("li",{children:"Collaborate with programmers to enhance application to fit new user needs"}),(0,a.jsx)("li",{children:"Trace errors caused by incorrect data on database"})]})]})}),(0,a.jsx)(l.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{ease:"easeOut",duration:.1},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:.9}},className:"flex flex-col gap-2",children:(0,a.jsxs)("div",{className:"container h-fit",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"font-bold text-md",children:"JUNIOR SYSTEM ANALYST"}),(0,a.jsx)("div",{className:"text-xs",children:"Bina Nusantara IT Division"})]}),(0,a.jsx)("div",{className:"pt-1 text-xs whitespace-nowrap",children:"MAR 2020 - OCT 2021"})]}),(0,a.jsxs)("ul",{className:"pl-3 mt-3 text-sm list-disc",children:[(0,a.jsx)("li",{children:"Manage project timelines"}),(0,a.jsx)("li",{children:"Collaborate with programmers to debug applications"}),(0,a.jsx)("li",{children:"Assist seniors on solving application errors"}),(0,a.jsx)("li",{children:"Assist users with problems on application usage"})]})]})})]})]}),(0,a.jsxs)(l.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{ease:"easeOut",duration:.1},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:.9}},children:[(0,a.jsx)("div",{className:"mt-6 mb-3 text-2xl font-bold text-left",children:"Projects"}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-3 lg:grid-cols-2",children:b.map((e,s)=>(0,a.jsx)(o(),{href:"/projects/".concat(e.id),children:(0,a.jsx)(l.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{ease:"easeOut",duration:.1},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:.9}},whileHover:{scale:1.05,zIndex:10},className:"h-full",children:(0,a.jsxs)(h.w,{isPressable:!0,isHoverable:!0,className:"container w-full h-full",children:[(0,a.jsxs)(p.G,{className:"p-0 overflow-visible",children:[(0,a.jsx)(c.J,{radius:"lg",width:"100%",alt:e.title,className:"w-full object-cover h-[12rem]",src:"".concat(e.image)}),(0,a.jsxs)("div",{className:"flex-col justify-between p-0 mt-3 text-center text-white text-small",children:[(0,a.jsx)("b",{className:"w-full text-base",children:e.title}),(0,a.jsx)("p",{className:"my-2",children:e.short_desc})]})]}),(0,a.jsx)(u.i,{className:"flex-col justify-between p-0 text-center text-white text-small",children:(0,a.jsx)("div",{className:"mt-2",children:e.tags.map((e,s)=>(0,a.jsx)(g.z,{color:"warning",className:"mx-1 my-1 text-xs",size:"sm",children:e},e))})})]})})},e.title))})]})]})]}),(0,a.jsx)("div",{className:"flex justify-center px-10 py-10 text-white bg-black",children:(0,a.jsx)(f.Z,{hideCopyButton:!0,color:"primary",variant:"solid",children:"Site handcrafted using NextJS"})})]})}}},function(e){e.O(0,[331,250,541,971,938,744],function(){return e(e.s=5433)}),_N_E=e.O()}]);