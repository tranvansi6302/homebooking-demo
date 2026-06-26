import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
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
import saigonImg from './assets/saigon.jpg'
import hanoiImg from './assets/hanoi.jpg'
import danangImg from './assets/danang.jpg'
import binhduongImg from './assets/binhduong.jpg'
import canthoImg from './assets/cantho.jpg'
import haiphongImg from './assets/haiphong.jpg'
import aboutImg from './assets/about.png'
import qrCodeImg from './assets/qr_code.png'
import phoneImg from './assets/phone.png'


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
    iconColor: '#2b7050',
    iconBg: '#edf7f4',
    img: momBabyCareImg
  },
  {
    name: 'Làm đẹp & Styling',
    desc: 'Chăm sóc da, tóc, trang điểm...',
    iconKey: 'beauty',
    iconColor: '#d97738',
    iconBg: '#fff5ec',
    img: spaBeautyImg
  },
  {
    name: 'Vệ sinh & Tiện ích',
    desc: 'Vệ sinh nhà cửa, giặt là, dọn dẹp...',
    iconKey: 'home',
    iconColor: '#257065',
    iconBg: '#ebf6f5',
    img: homeCleaningImg
  },
  {
    name: 'Kỹ thuật & Điện nước',
    desc: 'Sửa chữa điện nước, điện lạnh, đồ gia dụng...',
    iconKey: 'repair',
    iconColor: '#3173c8',
    iconBg: '#edf4fc',
    img: applianceRepairImg
  },
  {
    name: 'Dịch vụ thú cưng',
    desc: 'Chăm sóc, spa, khách sạn thú cưng...',
    iconKey: 'pets',
    iconColor: '#7249d8',
    iconBg: '#f3effc',
    img: petCareImg
  },
  {
    name: 'Y tế & Xét nghiệm',
    desc: 'Xét nghiệm tại nhà, chăm sóc y tế...',
    iconKey: 'health',
    iconColor: '#df3c50',
    iconBg: '#fff0f1',
    img: homeHealthcareImg
  },
  {
    name: 'Chăm sóc người già',
    desc: 'Chăm sóc sức khỏe, hỗ trợ sinh hoạt...',
    iconKey: 'mom-baby', // Fallback for elderly in design
    iconColor: '#b26435',
    iconBg: '#fdf3eb',
    img: elderlyCareImg
  }
];

const cities = [
  { name: 'Sài Gòn', label: 'TP. Hồ Chí Minh', key: 'sg', img: saigonImg },
  { name: 'Hà Nội', label: 'Hà Nội', key: 'hn', img: hanoiImg },
  { name: 'Đà Nẵng', label: 'Đà Nẵng', key: 'dn', img: danangImg },
  { name: 'Bình Dương', label: 'Bình Dương', key: 'bd', img: binhduongImg },
  { name: 'Cần Thơ', label: 'Cần Thơ', key: 'ct', img: canthoImg },
  { name: 'Hải Phòng', label: 'Hải Phòng', key: 'hp', img: haiphongImg }
];

const articles = [
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

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isIntroFinished, setIsIntroFinished] = React.useState(false);

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
        <div className={`preloader-overlay ${isLoaded ? 'is-finished' : ''}`}>
          <div className="preloader-grid">
            {Array.from({ length: 64 }).map((_, idx) => {
              const r = Math.floor(idx / 8);
              const c = idx % 8;
              const delay = (r + c) * 45; // diagonal wave delay
              return (
                <div
                  key={idx}
                  className="grid-block"
                  style={{ transitionDelay: `${delay}ms` }}
                />
              );
            })}
          </div>
        </div>
      )}

      <div className={`landing-wrapper ${isLoaded ? 'page-reveal' : ''}`}>
        {/* 1. Header (Navbar) */}
        <header className="navbar-section" data-aos="fade-down" data-aos-duration="600">
          <nav className="navbar-container container">
            <a className="brand-logo" href="#top">
              <img src="https://homebooking.global/assets/Logo-Hombooking---khong-nen.png" className="logo-img" alt="HomeBooking Logo" />
            </a>

            <div className="navbar-links">
              <a href="#top">Trang chủ</a>
              <a href="#featured-services">Dịch vụ</a>
              <a href="#about">Về chúng tôi</a>
              <a href="#cta-banner">Tải app</a>
              <a href="#partner-banners">Đối tác</a>
              <a href="#footer">Liên hệ</a>
            </div>

            <div className="navbar-actions">
              <a className="btn btn-outline" href="#cta-banner">Tải ứng dụng</a>
              <a className="btn btn-primary" href="#partner-banners">Trở thành đối tác</a>
            </div>
          </nav>
        </header>

        {/* 2. Hero Section */}
        <section className="hero-section" id="top">
          <div className="hero-container container">
            <div className="hero-content">
              <div className="hero-badge" data-aos="fade-up">
                <span>Một ứng dụng</span>
              </div>
              <h1 data-aos="fade-up" data-aos-delay="100">
                Kết nối <strong>mọi dịch vụ</strong> <br />
                tại thành phố
              </h1>
              <p className="hero-lead" data-aos="fade-up" data-aos-delay="200">
                Tiện lợi hơn mỗi ngày với các dịch vụ chất lượng cao <br />
                được tuyển chọn bởi HomeBooking.
              </p>
              <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
                <a className="btn btn-primary" href="#cta-banner">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Tải ứng dụng
                </a>
                <a className="btn btn-outline" href="#ecosystem">
                  Khám phá ngay
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>

              <div className="hero-social-proof" data-aos="fade-up" data-aos-delay="400">
                <div className="avatar-stack">
                  <img src={avatarAnImg} alt="User 1" />
                  <img src={avatarKhangImg} alt="User 2" />
                  <img src={avatarAnImg} alt="User 3" />
                  <img src={avatarKhangImg} alt="User 4" />
                </div>
                <span className="proof-text">
                  <strong>50,000+</strong> người đã dùng và đánh giá <strong>4.9/5 sao</strong>
                </span>
              </div>
            </div>

            <div className="hero-visual" data-aos="zoom-in" data-aos-delay="200">
              <div className="city-graphic-container">
                {/* Central pulse only */}
                <div className="city-center-dot">
                  <div className="city-center-ring" />
                  <div className="city-center-ring ring-2" />
                  <div className="city-center-ring ring-3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Circular Eco-system / Categories Section */}
        <section className="ecosystem-section" id="ecosystem">
          <div className="ecosystem-container container">
            <div className="ecosystem-copy" data-aos="fade-right">
              <span className="section-kicker">Hệ sinh thái HomeBooking</span>
              <h2>Tất cả nhu cầu của bạn trong một ứng dụng</h2>
              <div className="ecosystem-stats-badge">
                <strong>13+</strong>
                <span>
                  Danh mục dịch vụ <br />
                  Đáp ứng mọi nhu cầu sinh hoạt hàng ngày của gia đình bạn
                </span>
              </div>
              <a className="btn btn-outline" href="#featured-services">
                Khám phá các dịch vụ
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="ecosystem-circle-visual" data-aos="zoom-in" data-aos-delay="200">
              <img src={danhmucImg} alt="Hệ sinh thái dịch vụ HomeBooking" className="ecosystem-visual-img" />
            </div>
          </div>
        </section>

        {/* 4. Dịch vụ nổi bật Section */}
        <section className="featured-services-section" id="featured-services">
          <div className="featured-container container">
            <div className="section-header-centered" data-aos="fade-up">
              <h2>Dịch vụ nổi bật</h2>
              <p>Những dịch vụ được yêu thích nhất trên HomeBooking</p>
            </div>

            <div className="services-grid">
              {featuredServices.map((service, idx) => (
                <a
                  key={service.name}
                  className="service-card"
                  href="#cta-banner"
                  aria-label={`Tải app đặt dịch vụ ${service.name}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="card-image-wrapper">
                    <img src={service.img} alt={service.name} className="card-cover-img" />
                    <div className="card-category-badge-circle" style={{ backgroundColor: service.iconBg, color: service.iconColor }}>
                      {getEcosystemIcon(service.iconKey)}
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="card-category">{service.name}</span>
                    <h3>{service.desc}</h3>
                    <span className="card-arrow-btn" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}

              {/* The 8th Card: Xem tất cả */}
              <article className="service-card all-services-shortcut-card" data-aos="fade-up" data-aos-delay="800">
                <div className="shortcut-inner">
                  <div className="shortcut-icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <div className="shortcut-body">
                    <h3>Xem tất cả</h3>
                    <p>13+ Danh mục dịch vụ</p>
                    <a className="card-arrow-btn" href="#ecosystem" aria-label="Xem tất cả dịch vụ">
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

        {/* 5. Kết nối khắp mọi miền Section */}
        <section className="cities-section" id="cities">
          <div className="cities-container container">
            <div className="section-header-with-link" data-aos="fade-up">
              <h2>Kết nối khắp mọi miền</h2>
              <a className="text-link" href="#cta-banner">
                Xem thêm các tỉnh thành
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="cities-grid">
              {cities.map((city, idx) => (
                <a key={city.name} href="#cta-banner" className={`city-card city-${city.key}`} data-aos="fade-up" data-aos-delay={idx * 100}>
                  {city.img && <img src={city.img} alt={city.name} className="city-bg-img" />}
                  <div className="city-overlay-gradient"></div>
                  <div className="city-card-content">
                    <div className="city-pin-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <h3>{city.name}</h3>
                    <small>{city.label}</small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Tin tức & cộng đồng Section */}
        <section className="news-section" id="news">
          <div className="news-container container">
            <div className="section-header-with-link" data-aos="fade-up">
              <h2>Tin tức & cộng đồng</h2>
              <a className="text-link" href="#news">
                Xem tất cả tin tức
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="news-grid">
              {articles.map((article, index) => (
                <a key={index} href="#cta-banner" className="news-card" data-aos="fade-up" data-aos-delay={index * 150}>
                  <div className="news-image-wrapper">
                    <img src={article.img} alt={article.title} />
                    <span className="news-tag">{article.tag}</span>
                  </div>
                  <div className="news-body">
                    <h3>{article.title}</h3>
                    <div className="news-meta">
                      <span className="news-date">{article.date}</span>
                      <span className="dot-divider">·</span>
                      <span className="news-read-time">5 phút đọc</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Stats counter row */}
        <section className="stats-counters-section">
          <div className="stats-container container">
            <div className="stats-grid">
              <div className="stat-box" data-aos="fade-up">
                <div className="stat-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="stat-info">
                  <strong>10.000+</strong>
                  <span>Đối tác tin cậy</span>
                </div>
              </div>

              <div className="stat-box" data-aos="fade-up" data-aos-delay="100">
                <div className="stat-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <div className="stat-info">
                  <strong>300.000+</strong>
                  <span>Khách hàng hài lòng</span>
                </div>
              </div>

              <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
                <div className="stat-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="stat-info">
                  <strong>200.000+</strong>
                  <span>Đơn hàng hoàn thành</span>
                </div>
              </div>

              <div className="stat-box" data-aos="fade-up" data-aos-delay="300">
                <div className="stat-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="stat-info">
                  <strong>100%</strong>
                  <span>Cam kết chất lượng</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Call to Action download banner */}
        <section className="cta-banner-section" id="cta-banner">
          <div className="cta-banner-container container" data-aos="zoom-in">
            <div className="cta-banner-grid">
              <div className="cta-text-content" data-aos="fade-right" data-aos-delay="150">
                <h2>
                  Sẵn sàng khám phá <br />
                  hệ sinh thái HomeBooking?
                </h2>
                <p>Tải ứng dụng ngay hôm nay để nhận nhiều ưu đãi hấp dẫn!</p>

                <div className="cta-stats-row">
                  <div className="cta-stat-item">
                    <strong>50K+</strong>
                    <span>Người dùng</span>
                  </div>
                  <div className="cta-stat-item">
                    <strong>10K+</strong>
                    <span>Đối tác</span>
                  </div>
                  <div className="cta-stat-item">
                    <strong>13+</strong>
                    <span>Dịch vụ</span>
                  </div>
                  <div className="cta-stat-item">
                    <strong>34</strong>
                    <span>Tỉnh thành</span>
                  </div>
                </div>
              </div>

              <div className="cta-phone-mockup-wrapper" data-aos="zoom-in" data-aos-delay="300">
                <img src={phoneImg} alt="Ứng dụng HomeBooking trên điện thoại" className="cta-mockup-phone" />
              </div>

              <div className="cta-download-actions" data-aos="fade-left" data-aos-delay="250">
                <div className="qr-code-box">
                  <div className="qr-img-wrapper">
                    <img src={qrCodeImg} alt="QR code tải HomeBooking" className="qr-real-img" />
                    <div className="qr-scan-line" />
                  </div>
                  <span className="qr-label">Quét để tải ngay</span>
                </div>

                <div className="app-store-badges">
                  <a href="#top" className="store-badge-btn badge-appstore">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.73-1.2 1.87-1.05 2.98 1.12.09 2.27-.58 3-1.42z" />
                    </svg>
                    <div className="badge-text">
                      <small>Download on the</small>
                      <strong>App Store</strong>
                    </div>
                  </a>

                  <a href="#top" className="store-badge-btn badge-googleplay">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 5.27v13.46c0 .87.69 1.34 1.34.82l10.23-7.55-10.23-7.55C3.69 3.93 3 4.4 3 5.27zm11.95 6.13L4.93 3.86a.915.915 0 0 0-.58-.17c-.36.05-.66.27-.66.69l9.33 6.89 1.92-.13zm2.59-.2c.41-.3.41-.8 0-1.1L15.3 8.35l-2.09 1.91 4.33 2.89z" />
                    </svg>
                    <div className="badge-text">
                      <small>GET IT ON</small>
                      <strong>Google Play</strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Split Banners */}
        <section className="partner-banners-section" id="partner-banners">
          <div className="banners-container container">
            <div className="banner-grid">
              {/* Left Box: Dành cho người dùng */}
              <div className="split-banner-card user-banner" data-aos="fade-right">
                <div className="banner-text-content">
                  <span className="banner-kicker">DÀNH CHO NGƯỜI DÙNG</span>
                  <h3>Trải nghiệm sống tiện lợi</h3>
                  <ul className="checkmark-list">
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Đặt lịch nhanh chóng, tiện lợi
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Đội ngũ chuyên nghiệp, uy tín
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Giá cả minh bạch, rõ ràng
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Chăm sóc khách hàng tận tình
                    </li>
                  </ul>
                  <a className="btn btn-primary" href="#cta-banner">Tải ứng dụng ngay</a>
                </div>
                <div className="banner-mockup-wrapper">
                  <div className="inner-screen-mockup">
                    <div className="mockup-header-bar">HomeBooking App</div>
                    <div className="mockup-content-box"></div>
                  </div>
                </div>
              </div>

              {/* Right Box: Dành cho đối tác */}
              <div className="split-banner-card partner-banner" data-aos="fade-left">
                <div className="banner-text-content">
                  <span className="banner-kicker">DÀNH CHO ĐỐI TÁC</span>
                  <h3>Bứt phá doanh thu dịch vụ</h3>
                  <ul className="checkmark-list">
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Tiếp cận hàng ngàn khách hàng
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Tối ưu doanh thu & thời gian
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Quản lý đơn hàng hiệu quả
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Thanh toán nhanh chóng
                    </li>
                  </ul>
                  <a className="btn btn-primary" href="#top">Trở thành đối tác</a>
                </div>
                <div className="banner-storefront-wrapper">
                  <div className="storefront-vector-mockup">
                    <div className="store-roof"></div>
                    <div className="store-door"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Về chúng tôi Section */}
        <section className="about-app-section" id="about" data-aos="fade-up">
          <div className="about-app-container container">
            <div className="about-app-grid">

              {/* Left side: Visual image */}
              <div className="about-app-visual" data-aos="fade-right">
                <img src={aboutImg} alt="Về HomeBooking" className="about-visual-img-file" />
              </div>

              {/* Right side: Information and values */}
              <div className="about-app-content" data-aos="fade-left">
                <span className="section-kicker">Về chúng tôi</span>
                <h2>Tất cả nhu cầu, một ứng dụng duy nhất.</h2>
                <p className="about-lead-desc">
                  Homebooking là siêu app đa dịch vụ giúp bạn đặt mọi nhu cầu trong một ứng dụng—từ ăn uống, cà phê, lưu trú, tour, dịch vụ địa phương đến thanh toán, quản lý đặt chỗ và ưu đãi, mang lại trải nghiệm nhanh, tiện, đồng bộ cho người dùng và đối tác.
                </p>

                <div className="about-features-grid">
                  <div className="about-feature-item">
                    <div className="about-feat-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="about-feat-text">
                      <h4>Nhanh chóng & Tiện lợi</h4>
                      <p>Đặt dịch vụ tức thì, xử lý và đáp ứng tức thời mọi nhu cầu sinh hoạt.</p>
                    </div>
                  </div>

                  <div className="about-feature-item">
                    <div className="about-feat-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div className="about-feat-text">
                      <h4>Đồng bộ & Tiết kiệm</h4>
                      <p>Quản lý toàn bộ lịch trình đặt chỗ, tích lũy điểm ưu đãi và giao dịch trong một tài khoản.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 11. Footer */}
        <footer className="footer-section" id="footer">
          <div className="footer-container container">
            <div className="footer-grid">
              <div className="footer-brand-column">
                <a className="brand-logo" href="#top">
                  <img src="https://homebooking.global/assets/Logo-Hombooking---khong-nen.png" className="logo-img footer-logo-img" alt="HomeBooking Logo" />
                </a>
                <p className="brand-tagline">Kết nối mọi dịch vụ tại thành phố.</p>

                <div className="social-links-row">
                  <a href="#top" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#top" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </a>
                  <a href="#top" aria-label="TikTok">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </a>
                  <a href="#top" aria-label="Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="footer-links-column">
                <h4>CÔNG TY</h4>
                <a href="#about">Về chúng tôi</a>
                <a href="#top">Tuyển dụng</a>
                <a href="#news">Tin tức</a>
                <a href="#footer">Liên hệ</a>
              </div>

              <div className="footer-links-column">
                <h4>DỊCH VỤ</h4>
                <a href="#ecosystem">Chăm sóc mẹ & bé</a>
                <a href="#ecosystem">Làm đẹp & spa</a>
                <a href="#ecosystem">Vệ sinh nhà cửa</a>
                <a href="#ecosystem">Dịch vụ thú cưng</a>
                <a href="#ecosystem">Sửa chữa & bảo dưỡng</a>
              </div>

              <div className="footer-links-column">
                <h4>HỖ TRỢ</h4>
                <a href="#top">Trung tâm trợ giúp</a>
                <a href="#top">Điều khoản sử dụng</a>
                <a href="#top">Chính sách bảo mật</a>
                <a href="#top">Giải quyết tranh chấp</a>
              </div>

              <div className="footer-links-column contact-info-col">
                <h4>LIÊN HỆ</h4>
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

            <div className="footer-bottom">
              <p>© 2026 HomeBooking. Một cuộc sống tiện hơn, bắt đầu từ hôm nay.</p>
            </div>
          </div>
        </footer>


      </div>
    </>
  )
}

export default App
