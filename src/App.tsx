import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import homeCleaningImg from './assets/home_cleaning.png'
import spaBeautyImg from './assets/spa_beauty.png'
import applianceRepairImg from './assets/appliance_repair.png'
import localCommunityImg from './assets/local_community.png'
import relaxLifestyleImg from './assets/relax_lifestyle.png'
import kindnessServiceImg from './assets/kindness_service.png'
import avatarAnImg from './assets/avatar_an.png'
import avatarKhangImg from './assets/avatar_khang.png'
import momBabyCareImg from './assets/mom_baby_care.png'
import homeHealthcareImg from './assets/home_healthcare.png'
import petCareImg from './assets/pet_care_service.png'
import elderlyCareImg from './assets/elderly_care.png'
import danhmucImg from './assets/danhmuc.png'
import qrCodeImg from './assets/qr_code.png'
import appStoreIcon from './assets/app_store.png'
import chPlayIcon from './assets/chplay.png'
import bannerImg from './assets/banner.png'
import bgLeftImg from './assets/bg-left.jpg'
import bgRightImg from './assets/bg-right.jpg'

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ')

const ui = {
  container: 'mx-auto w-[calc(100%-48px)] max-w-[1200px] max-[768px]:w-full max-[768px]:px-3',
  btn: 'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5',
  btnPrimary: 'bg-[#003F3C] text-white shadow-[0_6px_16px_rgba(0,63,60,0.15)] hover:bg-[#002a28]',
  btnOutline: 'border border-[#003F3C]/18 bg-white/85 text-[#003F3C] hover:border-[#003F3C] hover:bg-[#003F3C] hover:text-white',
  sectionTitle: 'font-heading text-[clamp(1.2rem,2.8vw,1.55rem)] font-extrabold leading-tight text-[#003F3C]',
  sectionKicker: 'inline-flex w-fit rounded-lg bg-emerald-50 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-emerald-700',
  card: 'rounded-lg bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,63,60,0.09)]',
}

type Article = {
  tag: string
  title: string
  date: string
  img: string
  excerpt?: string
}

// ecosystemCategories definition removed to prevent unused variable compiler warning

const getEcosystemIcon = (key: string) => {
  switch (key) {
    case 'mom-baby':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19a1 1 0 0 1-1-1v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1a1 1 0 0 1-1 1H4Z" />
          <circle cx="9.5" cy="6.5" r="2.5" />
          <path d="M16 19v-2a4 4 0 0 0-4-4h-.5" />
          <circle cx="15" cy="8.5" r="2" />
        </svg>
      );
    case 'beauty':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" x2="9.01" y1="9" y2="9" />
          <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
      );
    case 'home':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'repair':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case 'health':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h4.28" />
        </svg>
      );
    case 'pets':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          <path d="M19 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          <path d="M5 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          <path d="M8 5c-.8 0-1.5.7-1.5 1.5S7.2 8 8 8s1.5-.7 1.5-1.5S8.8 5 8 5z" />
          <path d="M16 5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5S16.8 5 16 5z" />
        </svg>
      );
    case 'travel':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'food':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 21h20" />
          <path d="M12 17a10 10 0 0 0 10-10H2a10 10 0 0 0 10 10z" />
          <path d="M12 4V2" />
        </svg>
      );
    case 'shipping':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" x2="12" y1="22.08" y2="12" />
        </svg>
      );
    case 'education':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case 'events':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
};

const featuredServices = [
  {
    name: 'Mẹ & Bé',
    desc: 'Chăm sóc mẹ và bé toàn diện.',
    iconKey: 'mom-baby',
    iconColor: '#007a63',
    iconBg: '#e8f7f1',
    img: momBabyCareImg
  },
  {
    name: 'Làm đẹp & Styling',
    desc: 'Chăm sóc da, tóc, trang điểm...',
    iconKey: 'beauty',
    iconColor: '#0f8a70',
    iconBg: '#eefbf6',
    img: spaBeautyImg
  },
  {
    name: 'Vệ sinh & Tiện ích',
    desc: 'Vệ sinh nhà cửa, giặt là, dọn dẹp...',
    iconKey: 'home',
    iconColor: '#006b5d',
    iconBg: '#e7f6f3',
    img: homeCleaningImg
  },
  {
    name: 'Kỹ thuật & Điện nước',
    desc: 'Sửa chữa điện nước, điện lạnh, đồ gia dụng...',
    iconKey: 'repair',
    iconColor: '#0a7566',
    iconBg: '#edf8f5',
    img: applianceRepairImg
  },
  {
    name: 'Dịch vụ thú cưng',
    desc: 'Chăm sóc, spa, khách sạn thú cưng...',
    iconKey: 'pets',
    iconColor: '#00866d',
    iconBg: '#ecfaf5',
    img: petCareImg
  },
  {
    name: 'Y tế & Xét nghiệm',
    desc: 'Xét nghiệm tại nhà, chăm sóc y tế...',
    iconKey: 'health',
    iconColor: '#0f7c67',
    iconBg: '#eaf8f3',
    img: homeHealthcareImg
  },
  {
    name: 'Chăm sóc người già',
    desc: 'Chăm sóc sức khỏe, hỗ trợ sinh hoạt...',
    iconKey: 'mom-baby', // Fallback for elderly in design
    iconColor: '#006f61',
    iconBg: '#edf8f5',
    img: elderlyCareImg
  }
];



const articles: Article[] = [
  {
    tag: 'SỰ KIỆN',
    title: 'HomeBooking đồng hành cùng Ngày hội Khởi nghiệp đổi mới sáng tạo...',
    date: '25.06.2026',
    img: localCommunityImg
  },
  {
    tag: 'CẨM NANG',
    title: 'Hướng dẫn đặt dịch vụ nhanh chóng, an toàn cùng gia đình...',
    date: '24.06.2026',
    img: relaxLifestyleImg
  },
  {
    tag: 'KHUYẾN MÃI',
    title: 'Ưu đãi cực sốc lên đến 50% cho các dịch vụ dọn dẹp vệ sinh...',
    date: '22.06.2026',
    img: homeCleaningImg
  },
  {
    tag: 'ĐỐI TÁC',
    title: 'Câu chuyện khởi nghiệp thành công, phát triển bền vững cùng HomeBooking...',
    date: '20.06.2026',
    img: kindnessServiceImg
  }
];

const allNewsArticles: Article[] = [
  {
    tag: 'MẸO VẶT',
    title: '10 mẹo dọn nhà nhanh chóng sạch sẽ đón Tết',
    date: '20/05/2024',
    excerpt: 'Áp dụng ngay những mẹo dọn dẹp đơn giản nhưng hiệu quả giúp không gian nhà bạn luôn sạch sẽ, thơm mát và không tốn nhiều thời gian.',
    img: homeCleaningImg
  },
  {
    tag: 'MẸ & BÉ',
    title: 'Kinh nghiệm chăm sóc bé sơ sinh từ A-Z',
    date: '18/05/2024',
    excerpt: 'Những điều bố mẹ cần biết để chăm bé khỏe mạnh, phát triển tốt ngay từ những ngày đầu đời.',
    img: momBabyCareImg
  },
  {
    tag: 'DỊCH VỤ',
    title: '5 dấu hiệu cần vệ sinh máy lạnh ngay tại nhà',
    date: '16/05/2024',
    excerpt: 'Máy lạnh bẩn không chỉ gây tốn điện mà còn ảnh hưởng đến sức khỏe. Đừng bỏ qua những dấu hiệu này.',
    img: applianceRepairImg
  },
  {
    tag: 'CỘNG ĐỒNG',
    title: 'HomeBooking cùng cộng đồng làm sạch môi trường',
    date: '15/05/2024',
    excerpt: 'Chương trình ý nghĩa thu hút đông đảo tình nguyện viên tham gia, chung tay vì môi trường xanh - sạch - đẹp.',
    img: localCommunityImg
  },
  {
    tag: 'KHUYẾN MÃI',
    title: 'Ưu đãi 30% dịch vụ vệ sinh nhà trong tháng 5',
    date: '13/05/2024',
    excerpt: 'Giảm giá đặc biệt dành cho khách hàng đặt lịch qua ứng dụng HomeBooking.',
    img: danhmucImg
  },
  {
    tag: 'CÔNG TY',
    title: 'HomeBooking hợp tác chiến lược cùng Viettel',
    date: '10/05/2024',
    excerpt: 'Hợp tác nhằm mang đến nhiều tiện ích và ưu đãi hơn cho khách hàng trên toàn quốc.',
    img: kindnessServiceImg
  }
]

const newsCategories = ['Tất cả', 'Mẹo vặt', 'Khuyến mãi', 'Sự kiện', 'Công ty', 'Cộng đồng']

type NewsPageProps = {
  onSelectArticle: (article: Article) => void
}

type NewsSidebarProps = NewsPageProps & {
  showCategories?: boolean
}

function ShareLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
      <span className="font-semibold text-slate-700">Chia sẻ:</span>
      <a className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white font-bold text-[#003F3C] transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50" href="#top" aria-label="Chia sẻ Facebook">f</a>
      <a className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white font-bold text-[#003F3C] transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50" href="#top" aria-label="Chia sẻ Messenger">◎</a>
      <a className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white font-bold text-[#003F3C] transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50" href="#top" aria-label="Sao chép liên kết">∞</a>
      <a className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white font-bold text-[#003F3C] transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50" href="#top" aria-label="In bài viết">▦</a>
    </div>
  )
}

function NewsSidebar({ onSelectArticle, showCategories = false }: NewsSidebarProps) {
  const featuredArticles = allNewsArticles.slice(0, 5)
  const categoryStats = [
    ['Mẹo vặt', 25],
    ['Khuyến mãi', 12],
    ['Sự kiện', 15],
    ['Công ty', 10],
    ['Cộng đồng', 18],
    ['Dịch vụ', 20]
  ]

  return (
    <aside className="sticky top-24 flex flex-col gap-5 self-start max-[1024px]:static max-[1024px]:grid max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 font-heading text-base font-extrabold text-slate-800">Bài viết nổi bật</h2>
        <div className="flex flex-col gap-4">
          {featuredArticles.map((article) => (
            <a
              href="#news-detail"
              className="grid grid-cols-[74px_minmax(0,1fr)] items-center gap-3"
              key={article.title}
              onClick={(event) => {
                event.preventDefault()
                onSelectArticle(article)
              }}
            >
              <img className="h-[62px] w-[74px] rounded-lg object-cover" src={article.img} alt={article.title} />
              <span>
                <strong className="line-clamp-2 text-[0.82rem] font-bold leading-snug text-slate-800">{article.title}</strong>
                <small className="mt-1 block text-xs text-slate-500">{article.date}</small>
              </span>
            </a>
          ))}
        </div>
      </section>

      {showCategories && (
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-heading text-base font-extrabold text-slate-800">Danh mục</h2>
          <div className="flex flex-col divide-y divide-slate-100">
            {categoryStats.map(([category, count]) => (
              <a className="flex items-center justify-between py-3 text-sm font-semibold text-slate-700 transition hover:text-emerald-700" href="#news" key={category}>
                <span className="flex items-center gap-2">
                  <i aria-hidden="true">⌘</i>
                  {category}
                </span>
                <small className="rounded-lg bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">{count}</small>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-2 font-heading text-base font-extrabold text-slate-800">Theo dõi HomeBooking</h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-500">Cập nhật tin tức mới nhất trên các kênh của chúng tôi</p>
        <div className="flex gap-3">
          <a className="grid size-10 place-items-center rounded-full bg-[#003F3C] font-bold text-white" href="#top" aria-label="Facebook">f</a>
          <a className="grid size-10 place-items-center rounded-full bg-[#003F3C] font-bold text-white" href="#top" aria-label="YouTube">▶</a>
          <a className="grid size-10 place-items-center rounded-full bg-[#003F3C] font-bold text-white" href="#top" aria-label="TikTok">♪</a>
          <a className="grid size-10 place-items-center rounded-full bg-[#003F3C] font-bold text-white" href="#top" aria-label="Instagram">◎</a>
        </div>
      </section>

      <section className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-5 shadow-sm">
        <h2 className="mb-2 font-heading text-lg font-extrabold text-slate-800">Tải ứng dụng <span className="text-emerald-700">HomeBooking</span></h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-500">Trải nghiệm đặt dịch vụ nhanh chóng, tiện lợi mọi lúc mọi nơi.</p>
        <div className="flex items-center gap-4">
          <img className="size-24 rounded-lg object-cover" src={qrCodeImg} alt="QR tải ứng dụng HomeBooking" />
          <div className="flex flex-col gap-2">
            <a className="rounded-lg bg-[#003F3C] px-4 py-2 text-center text-xs font-bold text-white" href="#footer">App Store</a>
            <a className="rounded-lg bg-[#003F3C] px-4 py-2 text-center text-xs font-bold text-white" href="#footer">Google Play</a>
          </div>
        </div>
      </section>
    </aside>
  )
}

function NewsListingPage({ onSelectArticle }: NewsPageProps) {

  return (
    <main className="bg-white text-slate-800">
      <section className="border-b border-slate-200 bg-right bg-no-repeat pt-20 pb-8" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'auto 100%' }}>
        <div className={cn(ui.container, 'flex min-h-[118px] items-center')}>
          <div>
            <h1 className="mb-3 font-heading text-[clamp(1.55rem,2.8vw,2rem)] font-extrabold leading-tight text-slate-800">Tin tức</h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-500">Cập nhật những thông tin, mẹo hay và hoạt động mới nhất từ HomeBooking</p>
          </div>
        </div>
      </section>

      <section className="py-8 pb-14">
        <div className={ui.container}>
          <div className="mb-5 flex items-center justify-between gap-4 max-[900px]:flex-col max-[900px]:items-stretch">
            <div className="flex flex-wrap items-center gap-2.5 max-[520px]:grid max-[520px]:grid-cols-2 max-[520px]:gap-2" aria-label="Danh mục tin tức">
              {newsCategories.map((category, index) => (
                <button key={category} className={cn('min-h-10 rounded-lg border px-5 text-sm font-bold transition max-[520px]:min-w-0 max-[520px]:px-3 max-[520px]:text-xs', index === 0 ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white')} type="button">
                  <span className="block truncate">{category}</span>
                </button>
              ))}
            </div>

            <label className="flex h-[52px] min-w-[340px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-emerald-600 max-[900px]:min-w-0" aria-label="Tìm kiếm bài viết">
              <input className="w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" type="search" placeholder="Tìm kiếm bài viết..." />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </label>
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_330px] items-start gap-8 max-[1024px]:grid-cols-1">
            <div className="flex flex-col">
              {allNewsArticles.map((article) => (
                <article className="mb-6 grid grid-cols-[300px_minmax(0,1fr)] gap-6 border-b border-slate-200 pb-6 max-[768px]:grid-cols-1" key={article.title}>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img className="h-full w-full object-cover" src={article.img} alt={article.title} />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center">
                    <h2 className="mb-3 line-clamp-2 font-heading text-xl font-extrabold leading-snug text-slate-800">{article.title}</h2>
                    <p className="mb-5 text-sm leading-7 text-slate-500">{article.excerpt}</p>
                    <div className="flex items-center justify-between gap-4 max-[640px]:flex-col max-[640px]:items-start">
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span className="flex items-center gap-2">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 2v4" />
                            <path d="M16 2v4" />
                            <rect width="18" height="18" x="3" y="4" rx="2" />
                            <path d="M3 10h18" />
                          </svg>
                          {article.date}
                        </span>
                        <span className="inline-flex rounded-lg bg-emerald-50 px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide text-emerald-700">{article.tag}</span>
                      </div>
                      <a
                        href="#news-detail"
                        className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-extrabold text-[#003F3C]"
                        onClick={(event) => {
                          event.preventDefault()
                          onSelectArticle(article)
                        }}
                      >
                        Đọc ngay
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}

              <div className="mt-2 flex items-center gap-2" aria-label="Phân trang tin tức">
                {[1, 2, 3].map((page) => (
                  <button key={page} className={cn('grid size-10 place-items-center rounded-lg border text-sm font-bold transition', page === 1 ? 'border-[#003F3C] bg-[#003F3C] text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-[#003F3C]')} type="button">{page}</button>
                ))}
                <button className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-700" type="button">...</button>
                <button className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-700" type="button">10</button>
                <button className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700" type="button" aria-label="Trang tiếp theo">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            <NewsSidebar onSelectArticle={onSelectArticle} />
          </div>
        </div>
      </section>
    </main>
  )
}

function NewsDetailPage({
  article,
  onSelectArticle,
  onBackToHome,
  onBackToNews
}: NewsPageProps & { article: Article; onBackToHome: () => void; onBackToNews: () => void }) {
  const currentIndex = allNewsArticles.findIndex((item) => item.title === article.title)
  const previousArticle = allNewsArticles[(currentIndex + allNewsArticles.length - 1) % allNewsArticles.length]
  const nextArticle = allNewsArticles[(currentIndex + 1) % allNewsArticles.length]

  return (
    <main className="bg-white text-slate-800" id="news-detail">
      <div className="border-b border-slate-200 bg-slate-50 pt-20 pb-3">
        <div className={cn(ui.container, 'flex flex-wrap items-center gap-2 text-sm text-slate-500')}>
          <a
            className="font-semibold text-[#003F3C] hover:text-emerald-700"
            href="#top"
            onClick={(event) => {
              event.preventDefault()
              onBackToHome()
            }}
          >
            Trang chủ
          </a>
          <span>&gt;</span>
          <a
            className="font-semibold text-[#003F3C] hover:text-emerald-700"
            href="#news"
            onClick={(event) => {
              event.preventDefault()
              onBackToNews()
            }}
          >
            Tin tức
          </a>
          <span>&gt;</span>
          <strong className="line-clamp-1 text-slate-700">{article.title}</strong>
        </div>
      </div>

      <section className="py-8 pb-14">
        <div className={cn(ui.container, 'grid grid-cols-[minmax(0,1fr)_330px] items-start gap-8 max-[1024px]:grid-cols-1')}>
          <article className="min-w-0">
            <span className="mb-4 inline-flex rounded-lg bg-emerald-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-700">{article.tag}</span>
            <h1 className="mb-4 font-heading text-[clamp(1.55rem,2.8vw,2.05rem)] font-extrabold leading-tight text-slate-900">{article.title}</h1>

            <div className="mb-7 flex items-center justify-between gap-5 border-y border-slate-200 py-4 max-[768px]:flex-col max-[768px]:items-start">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[#003F3C] text-sm font-extrabold text-white">HB</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-800">HomeBooking Team</strong>
                  <small className="text-xs text-slate-500">{article.date}</small>
                </div>
              </div>
              <ShareLinks />
            </div>

            <img className="mb-7 aspect-[16/9] w-full rounded-lg object-cover" src={article.img} alt={article.title} />

            <div className="mb-6 rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-sm font-semibold leading-7 text-[#003F3C]">
              {article.excerpt}
            </div>

            <div className="space-y-4 text-sm leading-7 text-slate-600 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-slate-900">
              <h2>1. Lên kế hoạch dọn nhà khoa học</h2>
              <p>Trước khi bắt tay vào dọn dẹp, hãy liệt kê các khu vực cần vệ sinh và sắp xếp theo thứ tự ưu tiên. Điều này giúp bạn tiết kiệm thời gian và tránh bỏ sót các khu vực quan trọng.</p>

              <h2>2. Dọn từ trên xuống dưới</h2>
              <p>Nguyên tắc vàng khi dọn nhà là bắt đầu từ những vị trí cao như trần nhà, kệ tủ, quạt trần rồi mới dọn xuống sàn. Cách này giúp bụi bẩn rơi xuống được xử lý ở bước cuối cùng.</p>

              <h2>3. Loại bỏ đồ không cần thiết</h2>
              <p>Tết là dịp lý tưởng để dọn bỏ những món đồ không còn sử dụng. Hãy mạnh dạn loại bỏ đồ cũ, hỏng hoặc không cần thiết để nhà cửa gọn gàng, rộng rãi hơn.</p>

              <h2>4. Sử dụng nguyên liệu tự nhiên</h2>
              <p>Giấm, baking soda, chanh... là những nguyên liệu tự nhiên giúp làm sạch hiệu quả, an toàn và tiết kiệm. Chúng đặc biệt hữu ích cho việc khử mùi và làm sạch bề mặt.</p>

              <div className="my-8 flex gap-4 rounded-lg border border-emerald-100 bg-emerald-50 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-600 font-bold text-white">♧</span>
                <div>
                  <strong className="text-slate-900">Mẹo nhỏ:</strong>
                  <p className="mt-1">Bật nhạc yêu thích trong lúc dọn dẹp để tạo cảm hứng và giúp công việc trở nên nhẹ nhàng, vui vẻ hơn nhé!</p>
                </div>
              </div>

              <p>Hy vọng những mẹo nhỏ trên sẽ giúp bạn dọn nhà nhanh chóng, tiết kiệm thời gian để có một không gian sống sạch sẽ, ấm cúng cùng gia đình.</p>
            </div>

            <div className="mt-9 flex items-center justify-between gap-5 border-t border-slate-200 pt-6 max-[768px]:flex-col max-[768px]:items-start">
              <div className="flex flex-wrap gap-2">
                {['# dọn nhà', '# tết', '# mẹo vặt', '# vệ sinh'].map((tag) => (
                <a
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                  href="#news"
                  key={tag}
                  onClick={(event) => {
                    event.preventDefault()
                    onBackToNews()
                  }}
                >
                  {tag}
                </a>
                ))}
              </div>
              <ShareLinks />
            </div>

            <nav className="mt-9 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
              <a
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
                href="#news-detail"
                onClick={(event) => {
                  event.preventDefault()
                  onSelectArticle(previousArticle)
                }}
              >
                <span className="text-xl text-emerald-700">←</span>
                <small className="mt-2 block text-xs font-bold uppercase text-slate-400">Bài viết trước</small>
                <strong className="mt-1 line-clamp-2 block text-sm font-extrabold text-slate-800">{previousArticle.title}</strong>
              </a>
              <a
                className="rounded-lg border border-slate-200 bg-white p-5 text-right transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
                href="#news-detail"
                onClick={(event) => {
                  event.preventDefault()
                  onSelectArticle(nextArticle)
                }}
              >
                <span className="text-xl text-emerald-700">→</span>
                <small className="mt-2 block text-xs font-bold uppercase text-slate-400">Bài viết tiếp theo</small>
                <strong className="mt-1 line-clamp-2 block text-sm font-extrabold text-slate-800">{nextArticle.title}</strong>
              </a>
            </nav>
          </article>

          <div>
            <label className="mb-5 flex h-[52px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-emerald-600" aria-label="Tìm kiếm bài viết">
              <input className="w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" type="search" placeholder="Tìm kiếm bài viết..." />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </label>
            <NewsSidebar onSelectArticle={onSelectArticle} showCategories />
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isIntroFinished, setIsIntroFinished] = React.useState(false);
  const [activePage, setActivePage] = React.useState<'home' | 'news' | 'detail'>('home');
  const [selectedArticle, setSelectedArticle] = React.useState<Article>(allNewsArticles[0]);

  const goToNewsPage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActivePage('news');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHomeSection = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActivePage('home');
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  const openArticleDetail = (article: Article) => {
    setSelectedArticle(article);
    setActivePage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToNewsPage = () => {
    setActivePage('news');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHomePage = () => {
    setActivePage('home');
    window.setTimeout(() => {
      document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  React.useEffect(() => {
    // Enable smooth scroll for all anchor links
    document.documentElement.style.scrollBehavior = 'smooth';

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);

    const aosTimer = setTimeout(() => {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
      });
    }, 550);

    const destroyTimer = setTimeout(() => {
      setIsIntroFinished(true);
    }, 1600);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(aosTimer);
      clearTimeout(destroyTimer);
    };
  }, []);

  return (
    <>
      {!isIntroFinished && (
        <div className={cn('fixed inset-0 z-[9999] grid place-items-center bg-[#003F3C] transition-all duration-700', isLoaded && 'pointer-events-none opacity-0')}>
          <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: 64 }).map((_, idx) => {
              const r = Math.floor(idx / 8);
              const c = idx % 8;
              const delay = (r + c) * 45; // diagonal wave delay
              return (
                <div
                  key={idx}
                  className={cn('size-5 rounded-lg bg-white/15 transition-all duration-700', isLoaded && 'scale-0 opacity-0')}
                  style={{ transitionDelay: `${delay}ms` }}
                />
              );
            })}
          </div>
        </div>
      )}

      <div className={cn('min-h-screen bg-white opacity-0 transition-opacity duration-700', isLoaded && 'opacity-100')}>
        {/* 1. Header (Navbar) */}
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/30 bg-white/70 shadow-[0_8px_24px_rgba(0,63,60,0.04)] backdrop-blur-xl" data-aos="fade-down" data-aos-duration="600">
          <nav className={cn(ui.container, 'flex h-14 items-center justify-between gap-4')}>
            <a className="flex items-center" href="#top" onClick={goToHomeSection('top')}>
              <img src="https://homebooking.global/assets/Logo-Hombooking---khong-nen.png" className="h-6 w-auto max-[520px]:h-5" alt="HomeBooking Logo" />
            </a>

            <div className="flex items-center gap-5 text-sm font-semibold text-slate-700 max-[900px]:hidden">
              <a className="transition hover:text-[#003F3C]" href="#top" onClick={goToHomeSection('top')}>Trang chủ</a>
              <a className="transition hover:text-[#003F3C]" href="#featured-services" onClick={goToHomeSection('featured-services')}>Dịch vụ</a>
              <a className="transition hover:text-[#003F3C]" href="#news" onClick={goToNewsPage}>Tin tức</a>
              <a className="transition hover:text-[#003F3C]" href="#about" onClick={goToHomeSection('about')}>Về chúng tôi</a>
              <a className="transition hover:text-[#003F3C]" href="#footer" onClick={goToHomeSection('footer')}>Liên hệ</a>
            </div>

            <div className="flex items-center gap-2">
              <a className={cn(ui.btn, ui.btnOutline, 'px-3 py-1.5 max-[520px]:hidden')} href="#about" onClick={goToHomeSection('about')}>Tải ứng dụng</a>
              <a className={cn(ui.btn, ui.btnPrimary, 'px-3 py-1.5 max-[520px]:px-3 max-[520px]:text-xs')} href="#partner-banners" onClick={goToHomeSection('partner-banners')}>Trở thành đối tác</a>
            </div>
          </nav>
        </header>

        {activePage === 'news' ? (
          <NewsListingPage onSelectArticle={openArticleDetail} />
        ) : activePage === 'detail' ? (
          <NewsDetailPage
            article={selectedArticle}
            onSelectArticle={openArticleDetail}
            onBackToHome={backToHomePage}
            onBackToNews={backToNewsPage}
          />
        ) : (
          <>
        {/* 2. Hero Section */}
        <section className="relative overflow-hidden bg-cover bg-center pt-[88px] pb-10 max-[768px]:pt-[82px]" id="top" style={{ backgroundImage: `url(${bannerImg})` }}>
          <div className={cn(ui.container, 'grid min-h-[470px] grid-cols-[1.05fr_0.95fr] items-center gap-8 max-[900px]:grid-cols-1 max-[900px]:text-center')}>
            <div className="max-[900px]:mx-auto" >
              <div className="mb-4 inline-flex rounded-lg bg-white/80 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-wide text-[#003F3C]" data-aos="fade-up">
                <span>Một ứng dụng</span>
              </div>
              <h1 className="font-heading text-[clamp(1.85rem,4vw,3.15rem)] font-extrabold leading-tight tracking-normal text-[#102f2d]" data-aos="fade-up" data-aos-delay="100">
                Kết nối <strong>mọi dịch vụ</strong> <br />
                tại thành phố
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600 max-[900px]:mx-auto max-[900px]:max-w-xl" data-aos="fade-up" data-aos-delay="200">
                Tiện lợi hơn mỗi ngày với các dịch vụ chất lượng cao <br />
                được tuyển chọn bởi HomeBooking.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 max-[900px]:justify-center" data-aos="fade-up" data-aos-delay="300">
                <a className={cn(ui.btn, ui.btnPrimary)} href="#about">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Tải ứng dụng
                </a>
                <a className={cn(ui.btn, ui.btnOutline)} href="#ecosystem">
                  Khám phá ngay
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3 max-[900px]:justify-center max-[520px]:flex-col" data-aos="fade-up" data-aos-delay="400">
                <div className="flex -space-x-3">
                  <img className="size-10 rounded-full object-cover" src={avatarAnImg} alt="User 1" />
                  <img className="size-10 rounded-full object-cover" src={avatarKhangImg} alt="User 2" />
                  <img className="size-10 rounded-full object-cover" src={avatarAnImg} alt="User 3" />
                  <img className="size-10 rounded-full object-cover" src={avatarKhangImg} alt="User 4" />
                </div>
                <span className="text-sm text-slate-600">
                  <strong>50,000+</strong> người đã dùng và đánh giá <strong>4.9/5 sao</strong>
                </span>
              </div>
            </div>

        
          </div>
        </section>

        {/* 3. Circular Eco-system / Categories Section */}
        <section className="bg-white py-10" id="ecosystem">
          <div className={cn(ui.container, 'grid grid-cols-[0.9fr_1.1fr] items-center gap-8 max-[900px]:grid-cols-1 max-[900px]:text-center')}>
            <div className="flex flex-col items-start max-[900px]:items-center" data-aos="fade-right">
              <span className={ui.sectionKicker}>Hệ sinh thái HomeBooking</span>
              <h2 className="mt-3 font-heading text-[clamp(1.55rem,3vw,2.25rem)] font-extrabold leading-tight text-[#003F3C]">Tất cả nhu cầu của bạn trong một ứng dụng</h2>
              <div className="my-5 flex items-center gap-3 rounded-lg bg-emerald-50 p-4 text-left">
                <strong className="text-3xl font-extrabold text-emerald-600">13+</strong>
                <span>
                  Danh mục dịch vụ <br />
                  Đáp ứng mọi nhu cầu sinh hoạt hàng ngày của gia đình bạn
                </span>
              </div>
              <a className={cn(ui.btn, ui.btnOutline)} href="#featured-services">
                Khám phá các dịch vụ
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="flex justify-center max-[768px]:hidden" data-aos="zoom-in" data-aos-delay="200">
              <img src={danhmucImg} alt="Hệ sinh thái dịch vụ HomeBooking" className="w-full max-w-[560px] object-contain" />
            </div>
          </div>
        </section>

        {/* 4. Dịch vụ nổi bật Section */}
        <section className="bg-slate-50 py-10" id="featured-services">
          <div className={ui.container}>
            <div className="mb-6 text-left" data-aos="fade-up">
              <h2 className={ui.sectionTitle}>Dịch vụ nổi bật</h2>
              <p className="mt-2 text-slate-500">Những dịch vụ được yêu thích nhất trên HomeBooking</p>
            </div>

            <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[520px]:gap-3">
              {featuredServices.map((service, idx) => (
                <a
                  key={service.name}
                  className={cn(ui.card, 'group flex min-h-[245px] flex-col overflow-hidden max-[520px]:min-h-[220px]')}
                  href="#about"
                  aria-label={`Tải app đặt dịch vụ ${service.name}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="relative h-[120px] overflow-hidden max-[520px]:h-[96px]">
                    <img src={service.img} alt={service.name} className="h-full w-full object-cover transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]" />
                  </div>
                  <div className="flex grow flex-col p-4 max-[520px]:p-3">
                    <div className="mb-3 inline-flex max-w-full items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold max-[520px]:mb-2 max-[520px]:px-2 max-[520px]:text-[0.66rem]" style={{ backgroundColor: service.iconBg, color: service.iconColor }}>
                      <span className="shrink-0 [&_svg]:size-3 max-[520px]:[&_svg]:size-2.5">{getEcosystemIcon(service.iconKey)}</span>
                      <span className="truncate">{service.name}</span>
                    </div>
                    <p className="line-clamp-2 min-h-[2.8rem] text-sm font-medium leading-relaxed text-slate-800 max-[520px]:min-h-[2.35rem] max-[520px]:text-xs max-[520px]:leading-5">{service.desc}</p>
                    <div className="mt-auto flex items-end justify-between border-t border-emerald-950/5 pt-3">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[0.7rem] font-medium uppercase text-slate-500 max-[520px]:text-[0.6rem]">Giá chỉ từ</span>
                        <span className="text-sm font-bold text-[#F3A365] max-[520px]:text-xs">Đang cập nhật</span>
                      </div>
                      <span className="grid size-8 place-items-center rounded-full bg-emerald-50 text-[#003F3C] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#003F3C] group-hover:text-white max-[520px]:size-7" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              ))}

              {/* The 8th Card: Xem tất cả */}
              <article className={cn(ui.card, 'flex min-h-[245px] flex-col bg-orange-50')} data-aos="fade-up" data-aos-delay="800">
                <div className="flex grow flex-col items-center justify-center p-5 text-center">
                  <div className="mb-5 grid size-14 place-items-center rounded-full bg-white text-[#F3A365]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-extrabold text-slate-900">Xem tất cả</h3>
                    <p className="mt-1 text-sm text-slate-500">13+ Danh mục dịch vụ</p>
                    <a className="mx-auto mt-5 grid size-9 place-items-center rounded-full bg-[#F3A365] text-white" href="#ecosystem" aria-label="Xem tất cả dịch vụ">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>


        {/* 6. Tin tức & cộng đồng Section */}
        <section className="bg-white py-10" id="news">
          <div className={ui.container}>
            <div className="mb-6 flex items-end justify-between gap-4 max-[640px]:flex-col max-[640px]:items-start" data-aos="fade-up">
              <div>
                <h2 className={ui.sectionTitle}>Tin tức &amp; cộng đồng</h2>
                <p className="mt-3 max-w-xl text-slate-500">Khám phá tin tức mới nhất, mẹo hữu ích và câu chuyện từ cộng đồng người dùng.</p>
              </div>
              <a className="inline-flex items-center gap-2 text-sm font-extrabold text-[#003F3C]" href="#news" onClick={goToNewsPage}>
                Xem tất cả tin tức
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[520px]:gap-3">
              {articles.map((article, index) => (
                <a key={index} href="#about" className={cn(ui.card, 'group flex flex-col overflow-hidden rounded-lg border border-emerald-950/5')} data-aos="fade-up" data-aos-delay={index * 150}>
                  <div className="relative h-40 overflow-hidden">
                    <img className="h-full w-full object-cover transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]" src={article.img} alt={article.title} />
                  </div>
                  <div className="flex grow flex-col p-5 max-[520px]:p-3">
                    <p className="line-clamp-2 min-h-[2.75rem] text-sm font-medium leading-relaxed text-slate-800 max-[520px]:min-h-[2.35rem] max-[520px]:text-xs max-[520px]:leading-5">{article.title}</p>
                    <div className="mt-auto flex items-center justify-between gap-2 pt-5 text-xs text-slate-500 max-[520px]:pt-3 max-[520px]:text-[0.65rem]">
                      <span className="shrink-0">{article.date}</span>
                      <span className="inline-flex min-w-0 max-w-[86px] shrink rounded-lg bg-emerald-50 px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-emerald-700 max-[520px]:max-w-[66px] max-[520px]:px-2 max-[520px]:text-[0.56rem]">
                        <span className="truncate">{article.tag}</span>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Về chúng tôi Section */}
        <section className="relative z-20 mt-20 overflow-visible bg-white py-3 max-[1024px]:mt-16 max-[768px]:mt-6 max-[768px]:py-0" id="about" data-aos="fade-up">
          <div className="relative overflow-visible bg-[#193f3a]">
            <div className="pointer-events-none absolute left-[38%] top-1/2 size-[430px] -translate-y-1/2 rounded-full bg-white/5 max-[900px]:hidden" />
            <div className={cn(ui.container, 'relative grid min-h-[240px] grid-cols-[minmax(0,1fr)_390px] items-center gap-7 py-7 max-[1024px]:grid-cols-[minmax(0,1fr)_340px] max-[900px]:grid-cols-1 max-[900px]:py-7 max-[900px]:text-center max-[768px]:min-h-0 max-[768px]:py-3')}>
              <div className="max-w-[680px]" data-aos="fade-right">
                <h2 className="font-heading text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold leading-tight text-white">Tất cả nhu cầu, một ứng dụng duy nhất.</h2>
                <p className="mt-3 max-w-[610px] text-xs font-normal leading-6 text-emerald-50/72 max-[900px]:mx-auto max-[520px]:leading-5">
                  HomeBooking là siêu app đa dịch vụ giúp bạn đặt mọi nhu cầu trong một ứng dụng - từ ăn uống, cà phê, lưu trú, tour, dịch vụ địa phương đến thanh toán, quản lý đặt chỗ và ưu đãi, mang lại trải nghiệm nhanh, tiện, đồng bộ cho người dùng và đối tác.
                </p>

                <div className="mt-5 flex gap-2.5 max-[900px]:justify-center max-[520px]:mx-auto max-[520px]:grid max-[520px]:w-full max-[520px]:max-w-[360px] max-[520px]:grid-cols-2 max-[520px]:gap-2">
                  <a href="#top" className="flex min-h-10 min-w-[145px] items-center justify-center gap-2.5 rounded-lg border border-white/18 bg-white/10 px-4 py-2 text-white shadow-[0_10px_20px_rgba(0,0,0,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 max-[520px]:min-h-12 max-[520px]:min-w-0 max-[520px]:gap-2 max-[520px]:border-white/25 max-[520px]:px-2 max-[520px]:py-1.5">
                    <img src={appStoreIcon} alt="" className="size-7 object-contain max-[520px]:size-7" />
                    <span className="flex flex-col items-start leading-none">
                      <span className="text-[0.52rem] font-bold uppercase text-white/70 max-[520px]:text-[0.48rem]">Tải xuống trên</span>
                      <span className="mt-1 text-[0.84rem] font-extrabold max-[520px]:text-[0.78rem]">App Store</span>
                    </span>
                  </a>

                  <a href="#top" className="flex min-h-10 min-w-[145px] items-center justify-center gap-2.5 rounded-lg border border-white/18 bg-white/10 px-4 py-2 text-white shadow-[0_10px_20px_rgba(0,0,0,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 max-[520px]:min-h-12 max-[520px]:min-w-0 max-[520px]:gap-2 max-[520px]:border-white/25 max-[520px]:px-2 max-[520px]:py-1.5">
                    <img src={chPlayIcon} alt="" className="size-7 object-contain max-[520px]:size-7" />
                    <span className="flex flex-col items-start leading-none">
                      <span className="text-[0.52rem] font-bold uppercase text-white/70 max-[520px]:text-[0.48rem]">Tải trên</span>
                      <span className="mt-1 text-[0.84rem] font-extrabold max-[520px]:text-[0.78rem]">Google Play</span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="relative z-30 h-[240px] overflow-visible max-[900px]:h-[210px] max-[768px]:hidden" data-aos="fade-left">
                <div className="absolute inset-y-0 left-[-18px] right-[-18px] flex items-center justify-center max-[900px]:left-0 max-[900px]:right-0">
                  <img src="https://homebooking.global/assets/mock-mobile.png" alt="Ứng dụng HomeBooking trên điện thoại" className="relative z-30 w-[285px] rotate-8 object-contain drop-shadow-[0_24px_26px_rgba(0,0,0,0.28)] transition duration-700 hover:-translate-y-1.5 hover:rotate-6 max-[1024px]:w-[255px] max-[900px]:w-[220px] max-[520px]:w-[178px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Split Banners */}
        <section className="bg-white py-10" id="partner-banners">
          <div className={ui.container}>
            <div className="grid grid-cols-2 gap-6 max-[1024px]:grid-cols-1">
              {/* Left Box: Dành cho người dùng */}
              <div
                className="relative flex min-h-[300px] overflow-hidden rounded-lg bg-cover bg-center p-7 max-[640px]:p-5"
                style={{ backgroundImage: `linear-gradient(90deg, rgba(255,247,237,0.94) 0%, rgba(255,247,237,0.82) 48%, rgba(255,247,237,0.28) 100%), url(${bgLeftImg})` }}
                data-aos="fade-right"
              >
                <div className="relative z-10 max-w-md">
                  <span className="mb-3 inline-flex rounded-lg bg-orange-50/85 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wide text-orange-700">DÀNH CHO NGƯỜI DÙNG</span>
                  <h3 className="mb-4 font-heading text-[clamp(1.1rem,2vw,1.3rem)] font-bold leading-tight text-[#7c3f12]">Trải nghiệm sống tiện lợi</h3>
                  <ul className="mb-5 flex flex-col gap-2.5 text-sm font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Đặt lịch nhanh chóng, tiện lợi
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Đội ngũ chuyên nghiệp, uy tín
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Giá cả minh bạch, rõ ràng
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Chăm sóc khách hàng tận tình
                    </li>
                  </ul>
                  <a className={cn(ui.btn, ui.btnPrimary)} href="#about">Tải ứng dụng ngay</a>
                </div>
              </div>

              {/* Right Box: Dành cho đối tác */}
              <div
                className="relative flex min-h-[300px] overflow-hidden rounded-lg bg-cover bg-center p-7 max-[640px]:p-5"
                style={{ backgroundImage: `linear-gradient(90deg, rgba(236,253,245,0.94) 0%, rgba(236,253,245,0.82) 48%, rgba(236,253,245,0.28) 100%), url(${bgRightImg})` }}
                data-aos="fade-left"
              >
                <div className="relative z-10 max-w-md">
                  <span className="mb-3 inline-flex rounded-lg bg-emerald-50/85 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wide text-emerald-700">DÀNH CHO ĐỐI TÁC</span>
                  <h3 className="mb-4 font-heading text-[clamp(1.1rem,2vw,1.3rem)] font-bold leading-tight text-[#003F3C]">Bứt phá doanh thu dịch vụ</h3>
                  <ul className="mb-5 flex flex-col gap-2.5 text-sm font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Tiếp cận hàng ngàn khách hàng
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Tối ưu doanh thu & thời gian
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Quản lý đơn hàng hiệu quả
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Thanh toán nhanh chóng
                    </li>
                  </ul>
                  <a className={cn(ui.btn, ui.btnPrimary)} href="#top">Trở thành đối tác</a>
                </div>
              </div>
            </div>
          </div>
        </section>

          </>
        )}

        {/* 11. Footer */}
        <footer className="border-t border-slate-200 bg-slate-50 py-10 pb-6" id="footer">
          <div className={ui.container}>
            <div className="mb-8 grid grid-cols-[1.2fr_0.8fr_0.9fr_0.8fr_1.3fr] gap-8 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
              <div className="flex flex-col items-start max-[1024px]:col-span-2 max-[1024px]:items-center max-[1024px]:text-center max-[640px]:col-span-1">
                <a className="flex items-center" href="#top">
                  <img src="https://homebooking.global/assets/Logo-Hombooking---khong-nen.png" className="h-7 w-auto max-[520px]:h-6" alt="HomeBooking Logo" />
                </a>
                <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">Kết nối mọi dịch vụ tại thành phố.</p>

                <div className="mt-5 flex gap-3">
                  <a className="grid size-10 place-items-center rounded-full bg-white text-[#003F3C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#003F3C] hover:text-white" href="#top" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a className="grid size-10 place-items-center rounded-full bg-white text-[#003F3C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#003F3C] hover:text-white" href="#top" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </a>
                  <a className="grid size-10 place-items-center rounded-full bg-white text-[#003F3C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#003F3C] hover:text-white" href="#top" aria-label="TikTok">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </a>
                  <a className="grid size-10 place-items-center rounded-full bg-white text-[#003F3C] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#003F3C] hover:text-white" href="#top" aria-label="Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-sm text-slate-500">
                <h4 className="mb-1 text-xs font-extrabold uppercase tracking-wide text-slate-900">CÔNG TY</h4>
                <a className="hover:text-[#003F3C]" href="#about">Về chúng tôi</a>
                <a className="hover:text-[#003F3C]" href="#top">Tuyển dụng</a>
                <a className="hover:text-[#003F3C]" href="#news">Tin tức</a>
                <a className="hover:text-[#003F3C]" href="#footer">Liên hệ</a>
              </div>

              <div className="flex flex-col gap-3 text-sm text-slate-500">
                <h4 className="mb-1 text-xs font-extrabold uppercase tracking-wide text-slate-900">DỊCH VỤ</h4>
                <a className="hover:text-[#003F3C]" href="#ecosystem">Chăm sóc mẹ & bé</a>
                <a className="hover:text-[#003F3C]" href="#ecosystem">Làm đẹp & spa</a>
                <a className="hover:text-[#003F3C]" href="#ecosystem">Vệ sinh nhà cửa</a>
                <a className="hover:text-[#003F3C]" href="#ecosystem">Dịch vụ thú cưng</a>
                <a className="hover:text-[#003F3C]" href="#ecosystem">Sửa chữa & bảo dưỡng</a>
              </div>

              <div className="flex flex-col gap-3 text-sm text-slate-500">
                <h4 className="mb-1 text-xs font-extrabold uppercase tracking-wide text-slate-900">HỖ TRỢ</h4>
                <a className="hover:text-[#003F3C]" href="#top">Trung tâm trợ giúp</a>
                <a className="hover:text-[#003F3C]" href="#top">Điều khoản sử dụng</a>
                <a className="hover:text-[#003F3C]" href="#top">Chính sách bảo mật</a>
                <a className="hover:text-[#003F3C]" href="#top">Giải quyết tranh chấp</a>
              </div>

              <div className="flex flex-col gap-3 text-sm leading-6 text-slate-500">
                <h4 className="mb-1 text-xs font-extrabold uppercase tracking-wide text-slate-900">LIÊN HỆ</h4>
                <span>
                  <strong>Hotline:</strong> 1900 1234
                </span>
                <span>
                  <strong>Email:</strong> support@homebooking.com
                </span>
                <span>
                  <strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP. Hồ Chí Minh
                </span>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6 text-center">
              <p className="text-sm text-slate-500">© 2026 HomeBooking. Một cuộc sống tiện hơn, bắt đầu từ hôm nay.</p>
            </div>
          </div>
        </footer>


      </div>
    </>
  )
}

export default App
