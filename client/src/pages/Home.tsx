import { useMemo, useState } from "react";
import {
  ArrowUpLeft,
  ChevronDown,
  ExternalLink,
  Eye,
  Film,
  Gamepad2,
  Image as ImageIcon,
  Layers3,
  Menu,
  Mic2,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { driveArchive, type ArchiveKind } from "@/data/driveArchive";

type Filter = "الكل" | "صور" | "فيديو" | "تجارب" | "صوت";
type Work = {
  title: string;
  label: string;
  type: Exclude<Filter, "الكل">;
  description: string;
  image: string;
  accent: string;
  link?: string;
  featured?: boolean;
};

const works: Work[] = [
  { title: "TechZone", label: "متجر التقنية", type: "تجارب", description: "تجربة متجر إلكتروني غامرة بواجهة عربية، مبنية لتجعل التقنية تبدو أقرب وأكثر إنسانية.", image: "/assets/build.webp", accent: "#c9ff54", link: "https://techzonearab-juffxfrw.manus.space", featured: true },
  { title: "حكايات من الضوء", label: "توليد بصري", type: "صور", description: "سلسلة صور مولدة بالذكاء الاصطناعي تستكشف العلاقة بين الإنسان والمواد والضوء.", image: "/assets/hero.webp", accent: "#ff8f70" },
  { title: "عالم صغير جداً", label: "كتاب أطفال", type: "صور", description: "شخصيات وألوان مرحة صُممت لبناء عالم قصصي دافئ ومفتوح للخيال.", image: "/assets/children.webp", accent: "#86d5ff" },
  { title: "على الطريق", label: "فيلم قصير", type: "فيديو", description: "مشهد سينمائي مولد بالذكاء الاصطناعي، من الفكرة إلى الحركة والصوت.", image: "/assets/portrait.webp", accent: "#d6a2ff", link: "https://drive.google.com/drive/folders/15kt1FhN_bSpa_ZPaT2PRinsTblkK_t8U" },
  { title: "سباق سيارات", label: "لعبة ويب", type: "تجارب", description: "لعبة متصفح خفيفة وسريعة؛ مثال على تحويل الفكرة إلى تفاعل قابل للعب.", image: "/assets/build.webp", accent: "#ffcf70", link: "https://ksnober77-oss.github.io/car-racer-snober/" },
  { title: "صوت الفكرة", label: "تعليق صوتي", type: "صوت", description: "تجارب صوتية عربية بلهجات ونبرات مختلفة لصناعة حضور يتجاوز الصورة.", image: "/assets/hero.webp", accent: "#85f0d2", link: "https://drive.google.com/drive/folders/1l3rsW5AE8cwByAJka_8g6xmJA_Qy-B5b" },
];

const filters: Filter[] = ["الكل", "صور", "فيديو", "تجارب", "صوت"];
const archiveFilters: Array<ArchiveKind | "الكل"> = ["الكل", "صور", "فيديو", "صوت", "تجارب", "ملفات"];

export default function Home() {
  const [filter, setFilter] = useState<Filter>("الكل");
  const [archiveFilter, setArchiveFilter] = useState<ArchiveKind | "الكل">("الكل");
  const [archiveQuery, setArchiveQuery] = useState("");
  const [selected, setSelected] = useState<Work | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleWorks = useMemo(() => filter === "الكل" ? works : works.filter((work) => work.type === filter), [filter]);
  const visibleArchive = useMemo(() => driveArchive.filter((item) => (archiveFilter === "الكل" || item.kind === archiveFilter) && item.name.toLocaleLowerCase().includes(archiveQuery.toLocaleLowerCase())), [archiveFilter, archiveQuery]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main dir="rtl" className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="topbar container">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="العودة إلى الأعلى"><span className="brand-mark"><Sparkles size={15} /></span><span>استوديو <b>بصري</b></span></button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("work")}>الأعمال</button>
          <button onClick={() => scrollTo("archive")}>الأرشيف</button>
          <button onClick={() => scrollTo("about")}>عن الاستوديو</button>
          <button onClick={() => scrollTo("contact")}>تواصل</button>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <button className="top-cta" onClick={() => scrollTo("contact")}>لنتحدث <ArrowUpLeft size={15} /></button>
      </nav>

      <section id="top" className="hero container">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="eyebrow-dot" /> معرض أعمال ذكاء اصطناعي <span className="eyebrow-line" /></div>
          <h1>نحوّل <em>الخيال</em><br />إلى شيء يُرى.</h1>
          <p className="hero-lede">استوديو إبداعي صغير يصنع صوراً، أفلاماً، أصواتاً وتجارب رقمية — بأدوات المستقبل وروح الإنسان.</p>
          <div className="hero-actions"><button className="primary-button" onClick={() => scrollTo("work")}>استكشف الأعمال <ArrowUpLeft size={17} /></button><span className="availability"><i /> متاح لمشروع جديد</span></div>
        </div>
        <div className="hero-art reveal delay-1">
          <div className="art-frame"><img src="/assets/hero.webp" alt="عمل بصري مولد بالذكاء الاصطناعي" /><div className="art-shade" /><div className="art-caption"><span>01 / 06</span><b>THE HUMAN<br />IMAGINATION</b></div></div>
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="hero-note">فكرة <span>×</span> تجربة<br /><b>نتيجة لا تُنسى</b></div>
        </div>
      </section>

      <section className="signal-strip"><div className="container signal-inner"><span>AI ART DIRECTION</span><span className="signal-star">✳</span><span>STORYTELLING</span><span className="signal-star">✳</span><span>EXPERIMENTAL DESIGN</span><span className="signal-star">✳</span><span>CREATIVE TECHNOLOGY</span></div></section>

      <section id="work" className="work-section container">
        <div className="section-heading"><div><span className="section-kicker">/  المختارات</span><h2>أعمال صنعت<br /><em>بفضول.</em></h2></div><p>كل مشروع يبدأ بسؤال صغير، ثم يكبر عبر التجربة، اللعب، والتفاصيل التي لا تظهر من النظرة الأولى.</p></div>
        <div className="filter-row"><div className="filter-tabs">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="work-count">{String(visibleWorks.length).padStart(2, "0")} مشاريع</span></div>
        <div className="works-grid">{visibleWorks.map((work, index) => <article key={work.title} className={`work-card ${work.featured ? "featured" : ""}`} style={{ "--accent": work.accent } as React.CSSProperties} onClick={() => setSelected(work)}><div className="work-image"><img src={work.image} alt={work.title} /><div className="image-overlay" /><span className="work-index">0{index + 1}</span><span className="view-pill"><Eye size={14} /> عرض المشروع</span></div><div className="work-info"><div><span className="work-label">{work.label}</span><h3>{work.title}</h3></div><ArrowUpLeft className="work-arrow" size={21} /></div></article>)}</div>
      </section>

      <section id="about" className="about-section container"><div className="about-stamp"><div className="stamp-ring">✳</div><span>أفكار<br />بلا حدود</span></div><div className="about-copy"><span className="section-kicker">/  عن الاستوديو</span><h2>لسنا هنا<br />لصنع المزيد من <em>المحتوى.</em></h2><p>نحن هنا لصنع أعمال تشعر بها. نخلط بين العين الفنية، الأدوات الذكية، والفضول الذي لا يهدأ لنصنع صوراً تحمل معنى، وتجارب تفتح باباً جديداً.</p><div className="about-metrics"><div><b>06</b><span>تخصصات إبداعية</span></div><div><b>∞</b><span>مساحة للتجريب</span></div><div><b>01</b><span>فكرة في كل مرة</span></div></div></div></section>

      <section id="archive" className="archive-section container"><div className="section-heading archive-heading"><div><span className="section-kicker">/  الأرشيف الكامل</span><h2>كل ما في<br /><em>الحقيبة.</em></h2></div><p>48 ملفاً من الصور والفيديو والصوت والتجارب والملفات، مرتبة من مجلد «حقيبة أعمالي» لتبقى كل قصة قريبة.</p></div><div className="archive-toolbar"><div className="archive-tabs">{archiveFilters.map((item) => <button key={item} className={archiveFilter === item ? "active" : ""} onClick={() => setArchiveFilter(item)}>{item}</button>)}</div><input value={archiveQuery} onChange={(event) => setArchiveQuery(event.target.value)} placeholder="ابحث في الأرشيف..." aria-label="ابحث في الأرشيف" /></div><div className="archive-grid">{visibleArchive.map((item) => <a className="archive-card" key={item.id} href={item.url} target="_blank" rel="noreferrer"><div className={`archive-thumb kind-${item.kind}`}>{item.preview ? <img src={item.preview} alt={item.title} loading="lazy" /> : <span className="archive-icon">{item.kind === "فيديو" ? <Film size={23} /> : item.kind === "صوت" ? <Mic2 size={23} /> : item.kind === "تجارب" ? <Gamepad2 size={23} /> : <Layers3 size={23} />}</span>}<span className="archive-kind">{item.kind}</span></div><div className="archive-meta"><span>{item.folder}</span><strong>{item.title}</strong><small>{item.mimeType.split("/").pop()?.toUpperCase()} · {Math.max(1, Math.round(item.size / 1024))} KB</small></div><ArrowUpLeft className="archive-arrow" size={18} /></a>)}</div>{visibleArchive.length === 0 && <div className="archive-empty">لا توجد نتائج مطابقة. جرّب كلمة أخرى.</div>}</section>

      <section id="contact" className="contact-section container"><div className="contact-card"><div><span className="section-kicker">/  المشروع القادم</span><h2>لديك فكرة<br /><em>نصنعها معاً.</em></h2></div><a className="contact-button" href="mailto:hello@basri.studio">hello@basri.studio <ArrowUpLeft size={19} /></a><span className="contact-orb"><Sparkles size={25} /></span></div></section>
      <footer className="footer container"><span>© 2026 استوديو بصري</span><span>صُنع بالفضول والذكاء الاصطناعي</span><span className="footer-links"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ExternalLink size={12} /></a><a href="https://drive.google.com/drive/folders/1xndjBDAlxevP-JhJ9DSSjf2868MbA9Qh" target="_blank" rel="noreferrer">مصدر الأعمال <ExternalLink size={12} /></a></span></footer>

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="project-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)}><X size={18} /></button><img src={selected.image} alt={selected.title} /><div className="modal-content"><span className="work-label">{selected.label}</span><h2>{selected.title}</h2><p>{selected.description}</p>{selected.link ? <a className="primary-button" href={selected.link} target="_blank" rel="noreferrer">فتح التجربة <ExternalLink size={16} /></a> : <span className="modal-note"><Sparkles size={14} /> مشروع من أرشيف حقيبة أعمالي</span>}</div></div></div>}
    </main>
  );
}

void Film; void Gamepad2; void ImageIcon; void Layers3; void Mic2; void Play; void ChevronDown;
