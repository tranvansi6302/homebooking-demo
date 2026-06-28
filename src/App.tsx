import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Routes, Route, Link, useNavigate, useParams, useSearchParams, useLocation, Navigate } from 'react-router-dom'
import homeCleaningImg from './assets/home_cleaning.png'
import applianceRepairImg from './assets/appliance_repair.png'
import localCommunityImg from './assets/local_community.png'
import kindnessServiceImg from './assets/kindness_service.png'
import avatarAnImg from './assets/avatar_an.png'
import avatarKhangImg from './assets/avatar_khang.png'
import momBabyCareImg from './assets/mom_baby_care.png'
import danhmucImg from './assets/danhmuc.png'
import qrCodeImg from './assets/qr_code.png'
import appStoreIcon from './assets/app_store.png'
import chPlayIcon from './assets/chplay.png'
import bannerImg from './assets/banner.png'
import bannerTinTucImg from './assets/bannertintuc.png'
import bgDichVuImg from './assets/bgdichvu.png'
import bgLeftImg from './assets/bg-left.jpg'
import bgRightImg from './assets/bg-right.jpg'
import bgFooterImg from './assets/bgfooter.png'
import defaultServiceImg from './assets/default-service.jpg'
import { serviceCatalogHttp2 } from './modules/services/_apis/queries/http2/service-catalog.http2'
import type { ServiceResponseType } from './modules/services/_types/service-catalog/service-catalog.res.type'

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ')

const ui = {
  container: 'mx-auto w-[calc(100%-48px)] max-w-[1200px] max-[768px]:w-full max-[768px]:px-3',
  btn: 'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5',
  btnPrimary: 'bg-[#003F3C] text-white shadow-[0_6px_16px_rgba(0,63,60,0.15)] hover:bg-[#002a28]',
  btnOutline: 'border border-[#003F3C]/18 bg-white/85 text-[#003F3C] hover:border-[#003F3C] hover:bg-[#003F3C] hover:text-white',
  sectionTitle: 'font-heading text-[clamp(1.5rem,3.2vw,1.95rem)] font-extrabold leading-tight text-[#003F3C]',
  sectionKicker: 'inline-flex w-fit rounded-lg bg-emerald-50 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-emerald-700',
  card: 'rounded-lg bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,63,60,0.09)]',
}

type Article = {
  slug: string
  tag: string
  title: string
  date: string
  img: string
  excerpt: string
  author: string
  content: string[]
  readTime?: string
}

const allNewsArticles: Article[] = [
  {
    slug: '10-meo-don-nha-nhanh-chong-sach-se-don-tet',
    tag: 'MẸO VẶT',
    title: '10 mẹo dọn nhà nhanh chóng sạch sẽ đón Tết',
    date: '20/05/2026',
    author: 'Minh Thư',
    excerpt: 'Áp dụng ngay những mẹo dọn dẹp đơn giản nhưng hiệu quả giúp không gian nhà bạn luôn sạch sẽ, thơm mát và không tốn nhiều thời gian đón năm mới.',
    img: homeCleaningImg,
    content: [
      'Tết Nguyên Đán đang đến gần, và việc dọn dẹp nhà cửa đón năm mới luôn là nỗi ám ảnh của nhiều gia đình vì tốn quá nhiều thời gian và công sức. Tuy nhiên, nếu biết áp dụng những nguyên tắc khoa học dưới đây, bạn hoàn toàn có thể biến ngôi nhà của mình trở nên ngăn nắp và sạch bóng chỉ trong thời gian ngắn.',
      'Đầu tiên, hãy lập kế hoạch dọn dẹp cụ thể cho từng phòng. Đừng cố gắng làm tất cả mọi thứ cùng một lúc. Hãy tập trung giải quyết dứt điểm từng khu vực như phòng khách, nhà bếp rồi mới đến phòng ngủ. Việc này giúp bạn không bị nản chí và kiểm soát được tiến độ hiệu quả hơn.',
      'Nguyên tắc cốt lõi thứ hai là dọn dẹp từ trên xuống dưới và từ trong ra ngoài. Hãy quét mạng nhện trần nhà, lau cánh quạt trần, lau kệ tủ cao trước khi lau dọn sàn nhà. Bằng cách này, bụi bẩn rơi xuống sàn sẽ được quét sạch ở bước cuối cùng mà không làm bẩn lại những nơi bạn đã lau.',
      'Đừng quên tận dụng sức mạnh của các chất tẩy rửa tự nhiên như chanh, giấm trắng và baking soda. Chúng không chỉ an toàn cho sức khỏe, không chứa hóa chất độc hại mà còn có khả năng đánh bay các vết dầu mỡ cứng đầu trong bếp hay mảng bám lâu ngày trong nhà vệ sinh vô cùng hiệu quả.',
      'Cuối cùng, hãy thanh lý hoặc quyên góp những món đồ không còn sử dụng. Việc giữ lại quá nhiều đồ cũ chỉ khiến ngôi nhà thêm chật chội và tích tụ bụi bẩn. Hãy tạo không gian thở cho căn nhà để đón nguồn năng lượng tích cực của năm mới.'
    ]
  },
  {
    slug: 'kinh-nghiem-cham-soc-be-so-sinh-tu-a-z',
    tag: 'MẸ & BÉ',
    title: 'Kinh nghiệm chăm sóc bé sơ sinh từ A-Z cho các mẹ',
    date: '18/05/2026',
    author: 'Bác sĩ Mai Anh',
    excerpt: 'Những điều bố mẹ cần biết để chăm bé khỏe mạnh, phát triển tốt ngay từ những ngày đầu đời, từ dinh dưỡng đến giấc ngủ và vệ sinh.',
    img: momBabyCareImg,
    content: [
      'Chào đón một thiên thần nhỏ ra đời là niềm hạnh phúc vô bờ bến, nhưng đi kèm với đó là không ít bỡ ngỡ, đặc biệt là với những người lần đầu làm cha mẹ. Chăm sóc trẻ sơ sinh đòi hỏi sự tỉ mỉ, kiên nhẫn và cả những kiến thức y khoa nền tảng để bé phát triển khỏe mạnh nhất.',
      'Giấc ngủ của trẻ sơ sinh chiếm phần lớn thời gian trong ngày (từ 16 - 18 tiếng). Để bé ngủ ngon và tránh hội chứng đột tử ở trẻ sơ sinh (SIDS), hãy luôn đặt bé nằm ngửa khi ngủ trên một bề mặt phẳng, chắc chắn và không có quá nhiều chăn gối xung quanh. Nhiệt độ phòng lý tưởng nên duy trì ở mức 24 - 26 độ C và phòng cần thông thoáng khí.',
      'Về dinh dưỡng, sữa mẹ là nguồn thức ăn tốt nhất cho trẻ sơ sinh và trẻ nhỏ. Trong những tuần đầu, hãy cho bé bú theo nhu cầu, khoảng 2 - 3 tiếng một lần. Chú ý tư thế bú đúng để bé không nuốt phải nhiều hơi khí, gây trướng bụng và ọc sữa. Sau mỗi cữ bú, mẹ nhớ vỗ ợ hơi cho bé thật kỹ.',
      'Vệ sinh cuống rốn và tắm cho bé cũng cần được thực hiện cẩn thận. Cuống rốn của trẻ sơ sinh thường sẽ rụng sau 7 đến 15 ngày. Trong thời gian này, giữ rốn luôn khô ráo và sạch sẽ là quan trọng nhất. Khi tắm cho bé, hãy dùng nước ấm vừa phải (khoảng 37 độ C) và lau người bé nhẹ nhàng bằng khăn mềm.'
    ]
  },
  {
    slug: '5-dau-hieu-can-ve-sinh-may-lanh-ngay-tai-nha',
    tag: 'DỊCH VỤ',
    title: '5 dấu hiệu cảnh báo cần vệ sinh máy lạnh ngay lập tức',
    date: '16/05/2026',
    author: 'Trần Văn Hoàng (Kỹ thuật viên)',
    excerpt: 'Máy lạnh bẩn không chỉ gây tốn điện, làm giảm tuổi thọ thiết bị mà còn ảnh hưởng trực tiếp đến hệ hô hấp của gia đình bạn.',
    img: applianceRepairImg,
    content: [
      'Máy lạnh sau một thời gian dài hoạt động sẽ tích tụ rất nhiều bụi bẩn và vi khuẩn ở màng lọc cũng như dàn lạnh. Nếu không được vệ sinh định kỳ, thiết bị sẽ hoạt động kém hiệu quả và tiêu thụ nhiều điện năng hơn.',
      'Dấu hiệu đầu tiên và dễ nhận biết nhất là máy lạnh không lạnh hoặc hơi lạnh tỏa ra rất yếu mặc dù đã hạ nhiệt độ xuống thấp. Nguyên nhân là do lớp bụi dày đặc bám trên lưới lọc ngăn cản luồng gió mát lưu thông ra ngoài.',
      'Dấu hiệu thứ hai là máy lạnh phát ra tiếng ồn lớn hoặc tiếng rít khó chịu khi vận hành. Điều này xảy ra khi cánh quạt hoặc bộ phận tản nhiệt bị kẹt bụi bẩn quá dày, buộc động cơ phải hoạt động quá công suất.',
      'Thêm vào đó, nếu ngửi thấy mùi hôi mốc khó chịu tỏa ra từ điều hòa, bạn cần vệ sinh ngay lập tức. Đây là dấu hiệu cho thấy nấm mốc và vi khuẩn đang sinh sôi trong môi trường ẩm ướt bên trong dàn lạnh, cực kỳ nguy hiểm cho đường hô hấp của trẻ nhỏ và người già.',
      'Hãy chủ động vệ sinh máy lạnh định kỳ từ 3 đến 6 tháng một lần tùy thuộc vào tần suất sử dụng để bảo vệ sức khỏe gia đình và kéo dài tuổi thọ của thiết bị.'
    ]
  },
  {
    slug: 'homebooking-cung-cong-dong-lam-sach-moi-truong',
    tag: 'CỘNG ĐỒNG',
    title: 'HomeBooking đồng hành cùng chiến dịch làm sạch môi trường xanh',
    date: '15/05/2026',
    author: 'Ban Truyền Thông',
    excerpt: 'Chương trình ý nghĩa thu hút đông đảo tình nguyện viên tham gia, chung tay vì một không gian sống xanh - sạch - đẹp tại địa phương.',
    img: localCommunityImg,
    content: [
      'Nằm trong chuỗi hoạt động hướng tới cộng đồng bền vững, vừa qua HomeBooking đã tổ chức thành công chiến dịch gom rác và làm sạch môi trường tại các khu dân cư và công viên công cộng.',
      'Chương trình đã nhận được sự hưởng ứng nhiệt tình của hơn 200 tình nguyện viên bao gồm nhân viên công ty, đối tác tài xế, đối tác cung cấp dịch vụ dọn dẹp cùng đông đảo người dân địa phương. Kết quả, hơn 1 tấn rác thải nhựa và các loại rác không phân hủy đã được thu gom, phân loại và xử lý đúng quy trình.',
      'Đại diện ban lãnh đạo HomeBooking chia sẻ: "Chúng tôi không chỉ cung cấp dịch vụ dọn dẹp tiện ích cho từng gia đình, mà còn mong muốn lan tỏa ý thức giữ gìn vệ sinh chung, kiến tạo môi trường sống xanh - sạch - lành mạnh cho toàn xã hội. Đây là cam kết phát triển bền vững lâu dài của công ty."',
      'Chiến dịch này sẽ tiếp tục được nhân rộng tại nhiều tỉnh thành khác trong thời gian tới với mong muốn gieo mầm ý thức bảo vệ môi trường, mang lại giá trị thiết thực và nhân văn cho xã hội.'
    ]
  },
  {
    slug: 'uu-dai-30-phan-tram-dich-vu-ve-sinh-nha-trong-thang-5',
    tag: 'KHUYẾN MÃI',
    title: 'Ưu đãi cực sốc: Giảm ngay 30% dịch vụ vệ sinh nhà cửa',
    date: '13/05/2026',
    author: 'Khánh Vy (Marketing)',
    excerpt: 'Ưu đãi đặc biệt siêu tiết kiệm dành cho khách hàng đặt lịch dọn dẹp vệ sinh thông qua ứng dụng HomeBooking trong tháng này.',
    img: danhmucImg,
    content: [
      'Để tri ân sự đồng hành của quý khách hàng, HomeBooking triển khai chương trình khuyến mãi lớn nhất mùa hè: Giảm giá trực tiếp 30% cho dịch vụ vệ sinh nhà cửa trọn gói.',
      'Chương trình áp dụng cho tất cả các khách hàng đặt lịch dọn dẹp căn hộ, nhà phố qua ứng dụng HomeBooking. Các gói dịch vụ bao gồm: dọn dẹp định kỳ, tổng vệ sinh sâu, lau kính, giặt nệm, ghế sofa, rèm cửa với đội ngũ nhân viên chuyên nghiệp và trang thiết bị hiện đại.',
      'Khách hàng chỉ cần nhập mã "HEHEXANH" ở bước thanh toán để nhận ngay ưu đãi giảm 30% (tối đa 150.000đ). Mỗi tài khoản được sử dụng mã tối đa 2 lần trong suốt thời gian diễn ra chương trình từ nay đến hết ngày 31/05/2026.',
      'Số lượng ưu đãi mỗi ngày có hạn, hãy nhanh tay mở ứng dụng HomeBooking, chọn khung giờ phù hợp để tân trang ngôi nhà thân yêu của mình với mức giá cực kỳ tiết kiệm!'
    ]
  },
  {
    slug: 'homebooking-hop-tac-chien-luoc-cung-viettel',
    tag: 'CÔNG TY',
    title: 'HomeBooking ký kết hợp tác chiến lược toàn diện cùng Viettel',
    date: '10/05/2026',
    readTime: '7 phút đọc',
    author: 'Ban Giám Đốc',
    excerpt: 'Hợp tác chiến lược toàn diện nhằm mang đến nhiều giải pháp thanh toán tiện ích và ưu đãi độc quyền hơn cho khách hàng trên toàn quốc.',
    img: kindnessServiceImg,
    content: [
      'Hôm nay, HomeBooking chính thức công bố ký kết thỏa thuận hợp tác chiến lược toàn diện cùng Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel). Đây là cột mốc quan trọng đánh dấu sự kết hợp giữa siêu ứng dụng dịch vụ gia đình hàng đầu và nhà mạng viễn thông lớn nhất Việt Nam.',
      'Theo thỏa thuận, hai bên sẽ phối hợp tích hợp cổng thanh toán Viettel Money vào ứng dụng HomeBooking, giúp người dùng thực hiện giao dịch đặt dịch vụ một cách nhanh chóng, an toàn tuyệt đối và nhận được các chương trình hoàn tiền hấp dẫn.',
      'Bên cạnh đó, các dịch vụ chất lượng của HomeBooking như dọn dẹp nhà, sửa điện nước, chăm sóc sức khỏe tại nhà cũng sẽ được hiển thị trực tiếp trên kho tiện ích của ứng dụng Viettel Money, giúp hàng triệu khách hàng của Viettel tiếp cận dịch vụ uy tín chỉ với vài thao tác chạm.',
      'Sự kết hợp này kỳ vọng sẽ thúc đẩy thói quen thanh toán không tiền mặt của người dân và nâng cao chất lượng cuộc sống số của người Việt thông qua hệ sinh thái tiện ích thông minh.'
    ]
  }
]

const newsCategories = ['Tất cả', 'Mẹo vặt', 'Mẹ & Bé', 'Dịch vụ', 'Khuyến mãi', 'Sự kiện', 'Công ty', 'Cộng đồng']

export function ShareLinks() {
  const share = (platform: string) => {
    alert(`Chia sẻ bài viết qua ${platform}!`)
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
      <span className="font-semibold text-slate-700">Chia sẻ:</span>
      <button
        onClick={() => share('Facebook')}
        className="grid size-9 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white font-bold text-[#003F3C] transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50"
        aria-label="Chia sẻ Facebook"
      >
        f
      </button>
      <button
        onClick={() => share('Messenger')}
        className="grid size-9 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white font-bold text-[#003F3C] transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50"
        aria-label="Chia sẻ Messenger"
      >
        ◎
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          alert('Đã sao chép liên kết vào bộ nhớ tạm!')
        }}
        className="grid size-9 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white font-bold text-[#003F3C] transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50"
        aria-label="Sao chép liên kết"
      >
        ∞
      </button>
    </div>
  )
}

function NewsSidebar() {
  const featuredArticles = allNewsArticles.slice(0, 6)

  return (
    <aside className="flex flex-col gap-6 md:grid md:grid-cols-2 md:static lg:flex lg:flex-col lg:sticky lg:top-24 lg:self-start">
      {/* 1. Featured Articles */}
      <section className="rounded-xl border-0 bg-transparent p-0 shadow-none transition-shadow duration-300 hover:shadow-none md:border md:border-slate-100 md:bg-white md:p-5 md:shadow-[0_8px_30px_rgb(0,0,0,0.02)] md:hover:shadow-[0_8px_30px_rgba(0,63,60,0.05)] md:col-span-2 lg:col-span-1">
        <h2 className="mb-4 font-heading text-base font-extrabold text-slate-900 flex items-center gap-2">
          <span className="h-4 w-1 rounded bg-[#003F3C]"></span>
          Bài viết nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
          {featuredArticles.map((article) => (
            <Link
              to={`/tin-tuc/${article.slug}`}
              className="grid grid-cols-[74px_minmax(0,1fr)] items-center gap-4 group p-2 -mx-2 rounded-lg transition-colors duration-200 hover:bg-slate-50"
              key={article.slug}
            >
              <div className="h-[62px] w-[74px] overflow-hidden rounded-lg border border-slate-100 shadow-sm">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={article.img} alt={article.title} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="line-clamp-2 text-[14px] font-medium leading-snug text-slate-800 transition duration-300 group-hover:text-[#003F3C]">{article.title}</span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  {article.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. Socials */}
      <section className="rounded-xl border-0 bg-transparent p-0 shadow-none transition-shadow duration-300 hover:shadow-none md:border md:border-slate-100 md:bg-white md:p-5 md:shadow-[0_8px_30px_rgb(0,0,0,0.02)] md:hover:shadow-[0_8px_30px_rgba(0,63,60,0.05)]">
        <h2 className="mb-1 font-heading text-base font-extrabold text-slate-900 flex items-center gap-2">
          <span className="h-4 w-1 rounded bg-[#003F3C]"></span>
          Theo dõi HomeBooking
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-500">Cập nhật tin tức mới nhất từ chúng tôi</p>
        <div className="flex gap-3">
          <a className="grid size-9 place-items-center rounded-lg border border-slate-100 bg-slate-50 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-[#003F3C] hover:border-emerald-200" href="#top" aria-label="Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
          <a className="grid size-9 place-items-center rounded-lg border border-slate-100 bg-slate-50 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-[#003F3C] hover:border-emerald-200" href="#top" aria-label="YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
          </a>
          <a className="grid size-9 place-items-center rounded-lg border border-slate-100 bg-slate-50 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-[#003F3C] hover:border-emerald-200" href="#top" aria-label="TikTok">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
          </a>
          <a className="grid size-9 place-items-center rounded-lg border border-slate-100 bg-slate-50 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-[#003F3C] hover:border-emerald-200" href="#top" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
        </div>
      </section>

      {/* 3. Download App */}
      <section className="rounded-xl border-0 bg-transparent p-0 shadow-none transition-shadow duration-300 hover:shadow-none md:border md:border-slate-100 md:bg-white md:p-5 md:shadow-[0_8px_30px_rgb(0,0,0,0.02)] md:hover:shadow-[0_8px_30px_rgba(0,63,60,0.05)]">
        <h2 className="mb-1 font-heading text-base font-extrabold text-slate-900">
          Tải ứng dụng <span className="text-[#003F3C]">HomeBooking</span>
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-500">Trải nghiệm đặt dịch vụ nhanh chóng, tiện lợi mọi lúc mọi nơi.</p>
        <div className="flex gap-4 items-center flex-col md:flex-row lg:flex-col">
          <div className="p-1 bg-white rounded-lg border border-emerald-100/40 shadow-sm shrink-0 w-fit mx-auto md:mx-0 lg:mx-auto">
            <img className="size-20 rounded-md object-cover" src={qrCodeImg} alt="QR tải ứng dụng HomeBooking" />
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1 w-full">
            <a className="rounded-lg bg-[#003F3C] min-h-9 py-2 text-center text-xs font-bold text-white shadow-sm transition duration-300 hover:bg-emerald-800 hover:-translate-y-0.5 flex items-center justify-center gap-1" href="#footer">
              App Store
            </a>
            <a className="rounded-lg bg-[#003F3C] min-h-9 py-2 text-center text-xs font-bold text-white shadow-sm transition duration-300 hover:bg-emerald-800 hover:-translate-y-0.5 flex items-center justify-center gap-1" href="#footer">
              Google Play
            </a>
          </div>
        </div>
      </section>
    </aside>
  )
}

function AppDownloadBand({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative z-20 overflow-visible bg-white py-3 max-[768px]:overflow-hidden max-[768px]:py-0">
      <div className="relative overflow-visible bg-[#193f3a] max-[768px]:overflow-hidden">
        <div className="pointer-events-none absolute left-[38%] top-1/2 size-[430px] -translate-y-1/2 rounded-full bg-white/5 max-[900px]:hidden" />
        <div className={cn(ui.container, 'relative grid min-h-[220px] grid-cols-[minmax(0,1fr)_360px] items-center gap-7 py-6 max-[1024px]:grid-cols-[minmax(0,1fr)_320px] max-[900px]:grid-cols-1 max-[900px]:py-7 max-[900px]:text-center max-[768px]:min-h-0 max-[768px]:py-5')}>
          <div className="max-w-[680px]">
            <h2 className="font-heading text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-tight text-white">{title}</h2>
            <p className="mt-3 max-w-[560px] text-sm font-normal leading-6 text-emerald-50/74 max-[900px]:mx-auto max-[520px]:text-sm max-[520px]:leading-5">
              {description}
            </p>

            <div className="mt-5 flex gap-2.5 max-[900px]:justify-center max-[520px]:mx-auto max-[520px]:grid max-[520px]:w-full max-[520px]:max-w-[360px] max-[520px]:grid-cols-2 max-[520px]:gap-2">
              <a href="#footer" className="flex min-h-10 min-w-[145px] items-center justify-center gap-2.5 rounded-lg border border-white/18 bg-white/10 px-4 py-2 text-white shadow-[0_10px_20px_rgba(0,0,0,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 max-[520px]:min-h-12 max-[520px]:min-w-0 max-[520px]:gap-2 max-[520px]:border-white/25 max-[520px]:px-2 max-[520px]:py-1.5">
                <img src={appStoreIcon} alt="" className="size-7 object-contain max-[520px]:size-7" />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[0.52rem] font-bold uppercase text-white/70 max-[520px]:text-[0.48rem]">Tải xuống trên</span>
                  <span className="mt-1 text-[0.84rem] font-extrabold max-[520px]:text-[0.78rem]">App Store</span>
                </span>
              </a>

              <a href="#footer" className="flex min-h-10 min-w-[145px] items-center justify-center gap-2.5 rounded-lg border border-white/18 bg-white/10 px-4 py-2 text-white shadow-[0_10px_20px_rgba(0,0,0,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 max-[520px]:min-h-12 max-[520px]:min-w-0 max-[520px]:gap-2 max-[520px]:border-white/25 max-[520px]:px-2 max-[520px]:py-1.5">
                <img src={chPlayIcon} alt="" className="size-7 object-contain max-[520px]:size-7" />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[0.52rem] font-bold uppercase text-white/70 max-[520px]:text-[0.48rem]">Tải trên</span>
                  <span className="mt-1 text-[0.84rem] font-extrabold max-[520px]:text-[0.78rem]">Google Play</span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative z-30 h-[220px] overflow-visible max-[900px]:h-[190px] max-[768px]:hidden">
            <div className="absolute inset-y-0 left-[-18px] right-[-18px] flex items-center justify-center max-[900px]:left-0 max-[900px]:right-0">
              <img src="https://homebooking.global/assets/mock-mobile.png" alt="Ứng dụng HomeBooking trên điện thoại" className="relative z-30 w-[260px] rotate-8 object-contain drop-shadow-[0_24px_26px_rgba(0,0,0,0.28)] transition duration-700 hover:-translate-y-1.5 hover:rotate-6 max-[1024px]:w-[235px] max-[900px]:w-[210px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NewsListingPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFilter = searchParams.get('category') || 'Tất cả'
  const searchQuery = searchParams.get('search') || ''
  const [sortBy, setSortBy] = React.useState('newest');

  // Filter logic
  const filteredArticles = allNewsArticles.filter((article) => {
    const matchesCategory = categoryFilter === 'Tất cả' || article.tag.toLowerCase() === categoryFilter.toLowerCase()
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Sort logic
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    const parseDate = (dStr: string) => {
      const [d, m, y] = dStr.split('/').map(Number)
      return new Date(y, m - 1, d).getTime()
    }
    const timeA = parseDate(a.date)
    const timeB = parseDate(b.date)
    return sortBy === 'newest' ? timeB - timeA : timeA - timeB
  })

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams)
    if (category === 'Tất cả') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    setSearchParams(params)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    if (event.target.value) {
      params.set('search', event.target.value)
    } else {
      params.delete('search')
    }
    setSearchParams(params)
  }

  return (
    <main className="bg-white text-slate-800">
      <section className="relative w-full overflow-hidden border-b border-slate-200 pt-[58px]" style={{ minHeight: '200px' }}>
        <img
          src={bannerTinTucImg}
          alt="Banner Tin tức HomeBooking"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className={cn(ui.container, 'relative flex min-h-[200px] items-center')}>
          <div>
            <h1 className="mb-2 font-heading text-[clamp(1.55rem,2.8vw,2.1rem)] font-extrabold leading-tight text-slate-800">Tin tức</h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-500">Cập nhật những thông tin, mẹo hay và hoạt động mới nhất từ HomeBooking</p>
          </div>
        </div>
      </section>

      <section className="py-8 pb-14">
        <div className={ui.container}>
          
          {/* Desktop Filter Row (Hidden on mobile) */}
          <div className="hidden lg:grid grid-cols-[minmax(0,1fr)_360px] gap-8 mb-6">
            
            {/* Left side: Categories scroll list (font 14px) */}
            <div className="flex w-full items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0" aria-label="Danh mục tin tức">
              {newsCategories.map((category) => {
                const isActive = categoryFilter.toLowerCase() === category.toLowerCase()
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={cn(
                      'h-9 cursor-pointer rounded-full border px-4.5 text-[14px] font-semibold transition-all duration-200 shrink-0',
                      isActive
                        ? 'border-[#003F3C] bg-[#003F3C] text-white shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-[#003F3C]/40 hover:bg-slate-50 hover:text-slate-900'
                    )}
                    type="button"
                  >
                    {category}
                  </button>
                )
              })}
            </div>

            {/* Right side: Search + Sort aligned with sidebar */}
            <div className="flex items-center gap-2.5 w-full">
              {/* Search Box */}
              <label className="flex h-9 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-slate-400 focus-within:border-[#003F3C] focus-within:ring-1 focus-within:ring-[#003F3C]/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-slate-400">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  className="w-full border-0 bg-transparent text-[14px] text-slate-800 outline-none placeholder:text-slate-400"
                  type="search"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </label>

              {/* Sort Button with Icon */}
              <button
                type="button"
                onClick={() => setSortBy(sortBy === 'newest' ? 'oldest' : 'newest')}
                className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-[14px] font-semibold text-slate-700 hover:border-[#003F3C] hover:bg-slate-50 transition cursor-pointer shrink-0"
                title={sortBy === 'newest' ? "Sắp xếp: Mới nhất" : "Sắp xếp: Cũ nhất"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                  {sortBy === 'newest' ? (
                    <path d="m3 16 4 4 4-4M7 20V4M21 12H13M21 6H13M21 18H13" />
                  ) : (
                    <path d="m3 8 4-4 4 4M7 4v16M21 12H13M21 6H13M21 18H13" />
                  )}
                </svg>
                <span>{sortBy === 'newest' ? 'Mới nhất' : 'Cũ nhất'}</span>
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Filter Row (Hidden on desktop) */}
          <div className="flex lg:hidden flex-col gap-3 mb-6">
            {/* Row 1: Search Box (Full Width) */}
            <div className="w-full">
              <label className="flex h-9 w-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-slate-400 focus-within:border-[#003F3C] focus-within:ring-1 focus-within:ring-[#003F3C]/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-slate-400">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  className="w-full border-0 bg-transparent text-[14px] text-slate-800 outline-none placeholder:text-slate-400"
                  type="search"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </label>
            </div>

            {/* Row 2: Categories Dropdown (60%) + Sort Button (40%) */}
            <div className="flex w-full items-center gap-2.5">
              {/* Category Dropdown (60%) */}
              <div className="w-[60%] shrink-0">
                <select
                  value={categoryFilter}
                  onChange={(e) => handleCategoryClick(e.target.value)}
                  className="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-[14px] font-medium text-slate-700 outline-none focus:border-[#003F3C] focus:ring-1 focus:ring-[#003F3C]/10 cursor-pointer"
                >
                  {newsCategories.map((category) => (
                    <option key={category} value={category}>
                      Danh mục: {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Button (40%) */}
              <div className="w-[40%] flex-1">
                <button
                  type="button"
                  onClick={() => setSortBy(sortBy === 'newest' ? 'oldest' : 'newest')}
                  className="flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 text-[14px] font-medium text-slate-700 hover:border-[#003F3C] hover:bg-slate-50 transition cursor-pointer"
                  title={sortBy === 'newest' ? "Sắp xếp: Mới nhất" : "Sắp xếp: Cũ nhất"}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 shrink-0">
                    {sortBy === 'newest' ? (
                      <path d="m3 16 4 4 4-4M7 20V4M21 12H13M21 6H13M21 18H13" />
                    ) : (
                      <path d="m3 8 4-4 4 4M7 4v16M21 12H13M21 6H13M21 18H13" />
                    )}
                  </svg>
                  <span className="truncate">{sortBy === 'newest' ? 'Mới nhất' : 'Cũ nhất'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Listing Grid */}
          <div className="grid grid-cols-[minmax(0,1fr)_360px] items-start gap-8 max-[1024px]:grid-cols-1">
            <div className="flex flex-col max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-3">
              {sortedArticles.length > 0 ? (
                sortedArticles.map((article) => (
                  <Link to={`/tin-tuc/${article.slug}`} className="mb-6 grid grid-cols-[300px_minmax(0,1fr)] gap-6 border-b border-slate-200 pb-6 group hover:no-underline max-[768px]:mb-0 max-[768px]:flex max-[768px]:min-h-[220px] max-[768px]:flex-col max-[768px]:gap-0 max-[768px]:overflow-hidden max-[768px]:rounded-lg max-[768px]:border max-[768px]:border-emerald-950/5 max-[768px]:pb-0" key={article.slug}>
                    <div className="relative aspect-video overflow-hidden rounded-lg max-[768px]:h-[96px] max-[768px]:rounded-none">
                      <img className="h-full w-full object-cover transition duration-700 group-hover:scale-102" src={article.img} alt={article.title} />
                    </div>
                    <div className="flex min-w-0 flex-col justify-center font-normal max-[768px]:grow max-[768px]:justify-start max-[768px]:p-3">
                      <span className="mb-2 inline-flex w-fit rounded-lg bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700 max-[768px]:px-2 max-[768px]:text-[0.62rem]">{article.tag}</span>
                      <h2 className="mb-2 line-clamp-2 font-heading text-[14px] md:text-[18px] font-semibold leading-snug text-slate-800 transition duration-300 group-hover:text-[#003F3C] max-[768px]:text-[14px] max-[768px]:leading-5">
                        {article.title}
                      </h2>
                      <p className="mb-4 text-[14px] leading-relaxed text-slate-500 line-clamp-2 max-[768px]:hidden">{article.excerpt}</p>
                      <div className="flex items-center justify-between gap-4 max-[768px]:mt-auto max-[640px]:flex-col max-[640px]:items-start">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 max-[768px]:text-[12px]">
                          <span className="flex items-center gap-2">
                            <svg className="max-[768px]:size-3" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M8 2v4" />
                              <path d="M16 2v4" />
                              <rect width="18" height="18" x="3" y="4" rx="2" />
                              <path d="M3 10h18" />
                            </svg>
                            {article.date}
                          </span>
                        </div>
                        <span
                          className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-extrabold text-[#003F3C] transition group-hover:text-emerald-700 hover:translate-x-1 max-[768px]:hidden"
                        >
                          Đọc ngay
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-12 text-center text-slate-500">
                  Không tìm thấy bài viết nào phù hợp với bộ lọc hoặc từ khóa tìm kiếm của bạn.
                </div>
              )}
            </div>

            <NewsSidebar />
          </div>
        </div>
      </section>
    </main>
  )
}

function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const article = allNewsArticles.find((item) => item.slug === slug)

  if (!article) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Không tìm thấy bài viết</h2>
        <p className="mt-2 text-slate-500">Bài viết bạn đang tìm kiếm có thể đã bị xóa hoặc thay đổi liên kết.</p>
        <button
          onClick={() => navigate('/tin-tuc')}
          className="mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#003F3C] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800"
        >
          Quay lại danh sách Tin tức
        </button>
      </div>
    )
  }



  const relatedArticles = allNewsArticles
    .filter((item) => item.slug !== article.slug && item.tag === article.tag)
    .slice(0, 2)

  return (
    <main className="bg-white text-slate-800 pt-[58px] max-[768px]:pt-[52px]" id="news-detail">
      <div className="border-b border-slate-100 bg-slate-50/50 py-3.5">
        <div className={cn(ui.container, 'flex flex-wrap items-center gap-2.5 text-sm font-semibold text-slate-500')}>
          <Link className="inline-flex items-center gap-1.5 text-[#003F3C] transition hover:text-emerald-700" to="/">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="leading-none">Trang chủ</span>
          </Link>
          <svg className="text-slate-300 shrink-0" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <Link className="inline-flex items-center text-[#003F3C] transition hover:text-emerald-700" to="/tin-tuc">
            <span className="leading-none">Tin tức</span>
          </Link>
          <svg className="text-slate-300 shrink-0" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="line-clamp-1 text-slate-400 font-normal leading-none">{article.title}</span>
        </div>
      </div>

      <section className="py-8 pb-14">
        <div className={cn(ui.container, 'grid grid-cols-[minmax(0,1fr)_330px] items-start gap-8 max-[1024px]:grid-cols-1')}>
          <article className="min-w-0">
            <span className="mb-4 inline-flex rounded-lg bg-emerald-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-700">{article.tag}</span>
            <h1 className="mb-4 font-heading text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-slate-900">{article.title}</h1>

            <div className="mb-7 flex items-center justify-between gap-5 border-y border-slate-200 py-4 max-[768px]:flex-col max-[768px]:items-start">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[#003F3C] text-sm font-extrabold text-white">HB</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-800">HomeBooking Team</strong>
                  <small className="text-xs text-slate-500">{article.date}</small>
                </div>
              </div>
            </div>

            <img className="mb-7 aspect-video w-full rounded-lg object-cover shadow-sm" src={article.img} alt={article.title} />

            <div className="mb-6 rounded-lg border border-emerald-100 bg-emerald-50/60 p-5 text-sm font-semibold leading-7 text-[#003F3C]">
              {article.excerpt}
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Related articles section */}
            {relatedArticles.length > 0 && (
              <section className="mt-12 border-t border-slate-200 pt-8">
                <h3 className="mb-6 font-heading text-lg font-extrabold text-slate-800">Bài viết cùng danh mục</h3>
                <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
                  {relatedArticles.map((rel) => (
                    <Link to={`/tin-tuc/${rel.slug}`} key={rel.slug} className="group block">
                      <div className="aspect-video overflow-hidden rounded-lg bg-slate-100">
                        <img className="h-full w-full object-cover transition duration-300 group-hover:scale-103" src={rel.img} alt={rel.title} />
                      </div>
                      <h4 className="mt-3 line-clamp-2 font-heading text-sm font-bold text-slate-800 group-hover:text-emerald-700">{rel.title}</h4>
                      <small className="mt-1 block text-xs text-slate-400">{rel.date}</small>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          <div>
            <label className="mb-5 flex h-11 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 focus-within:border-emerald-600 transition-all duration-200" aria-label="Tìm kiếm bài viết">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-400">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                className="w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                type="search"
                placeholder="Tìm kiếm bài viết..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    navigate(`/tin-tuc?search=${encodeURIComponent((e.target as HTMLInputElement).value)}`)
                  }
                }}
              />
            </label>
            <NewsSidebar />
          </div>
        </div>
      </section>
    </main>
  )
}

function HomePage() {
  const articles = allNewsArticles.slice(0, 4)
  const { featuredServices, allServicesList } = useLandingServices()

  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  };

  return (
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
              <a className={cn(ui.btn, ui.btnPrimary)} href="#about" onClick={scrollTo('about')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Tải ứng dụng
              </a>
              <a className={cn(ui.btn, ui.btnOutline)} href="#ecosystem" onClick={scrollTo('ecosystem')}>
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
            <Link className={cn(ui.btn, ui.btnOutline)} to="/dich-vu">
              Khám phá các dịch vụ
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
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
            {featuredServices.map((service, idx) => {
              const getServiceLink = (name: string) => {
                const matched = allServicesList.find((item) => item.name === name);
                return matched ? `/dich-vu/${matched.slug}` : '/dich-vu';
              };
              return (
                <Link
                  key={service.name}
                  className={cn(ui.card, 'group flex min-h-[245px] flex-col overflow-hidden max-[520px]:min-h-[220px]')}
                  to={getServiceLink(service.name)}
                  aria-label={`Chi tiết dịch vụ ${service.name}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="relative h-[120px] overflow-hidden max-[520px]:h-[96px]">
                    <img src={service.img} alt={service.name} className="h-full w-full object-cover transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]" />
                  </div>
                  <div className="flex grow flex-col p-4 max-[520px]:p-3">
                    <div className="mb-3 inline-flex max-w-full self-start items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold max-[520px]:mb-2 max-[520px]:px-2 max-[520px]:text-[0.66rem]" style={{ backgroundColor: service.iconBg, color: service.iconColor }}>
                      <img src={service.icon} alt="" className="size-3 shrink-0 rounded object-cover max-[520px]:size-2.5" />
                      <span className="truncate">{service.name}</span>
                    </div>
                    <p className="line-clamp-2 min-h-[2.8rem] text-sm font-medium leading-relaxed text-slate-800 max-[520px]:min-h-[2.35rem] max-[520px]:text-sm max-[520px]:leading-5">{service.desc}</p>
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
                </Link>
              );
            })}

            {/* The 8th Card: Xem tất cả */}
            <Link to="/dich-vu" className={cn(ui.card, 'flex min-h-[245px] flex-col bg-orange-50 hover:no-underline group')} data-aos="fade-up" data-aos-delay="800">
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
                  <span className="mx-auto mt-5 grid size-9 place-items-center rounded-full bg-[#F3A365] text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
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
            <Link className="inline-flex items-center gap-2 text-sm font-extrabold text-[#003F3C] transition hover:text-emerald-700" to="/tin-tuc">
              Xem tất cả tin tức
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[520px]:gap-3">
            {articles.map((article, index) => (
              <Link key={index} to={`/tin-tuc/${article.slug}`} className={cn(ui.card, 'group flex flex-col overflow-hidden rounded-lg border border-emerald-950/5')} data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="relative h-40 overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]" src={article.img} alt={article.title} />
                </div>
                <div className="flex grow flex-col p-5 max-[520px]:p-3">
                  <p className="line-clamp-2 min-h-[2.75rem] text-sm font-medium leading-relaxed text-slate-800 transition duration-300 group-hover:text-emerald-700 max-[520px]:min-h-[2.35rem] max-[520px]:text-sm max-[520px]:leading-5">{article.title}</p>
                  <div className="mt-auto flex items-center justify-between gap-2 pt-5 text-xs text-slate-500 max-[520px]:pt-3 max-[520px]:text-[0.65rem]">
                    <span className="shrink-0">{article.date}</span>
                    <span className="inline-flex min-w-0 shrink rounded-lg bg-emerald-50 px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-emerald-700 max-[520px]:max-w-[66px] max-[520px]:px-2 max-[520px]:text-[0.56rem]">
                      <span className="truncate">{article.tag}</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Về chúng tôi Section */}
      <section className="relative z-20 mt-20 overflow-visible bg-white py-3 max-[1024px]:mt-16 max-[768px]:mt-6 max-[768px]:overflow-hidden max-[768px]:py-0" id="about" data-aos="fade-up">
        <div className="relative overflow-visible bg-[#193f3a] max-[768px]:overflow-hidden">
          <div className="pointer-events-none absolute left-[38%] top-1/2 size-[430px] -translate-y-1/2 rounded-full bg-white/5 max-[900px]:hidden" />
          <div className={cn(ui.container, 'relative grid min-h-[240px] grid-cols-[minmax(0,1fr)_390px] items-center gap-7 py-7 max-[1024px]:grid-cols-[minmax(0,1fr)_340px] max-[900px]:grid-cols-1 max-[900px]:py-7 max-[900px]:text-center max-[768px]:min-h-0 max-[768px]:py-3')}>
            <div className="max-w-[680px]" data-aos="fade-right">
              <h2 className="font-heading text-[clamp(1.5rem,3.2vw,1.95rem)] font-extrabold leading-tight text-white">Tất cả nhu cầu, một ứng dụng duy nhất.</h2>
              <p className="mt-3 max-w-[560px] text-sm font-normal leading-6 text-emerald-50/74 max-[900px]:mx-auto max-[520px]:text-sm max-[520px]:leading-5">
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
                <a className={cn(ui.btn, ui.btnPrimary)} href="#about" onClick={scrollTo('about')}>Tải ứng dụng ngay</a>
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
  )
}

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  desc: string;
}

export interface ServiceDetail {
  id: number;
  slug: string;
  name: string;
  categorySlug: string;
  tag: string;
  desc: string;
  priceLabel: string;
  img: string;
  gallery: string[];
  features: { title: string; desc: string }[];
  includes: string[];
}

type FeaturedService = {
  name: string
  desc: string
  icon: string
  iconColor: string
  iconBg: string
  img: string
}

const stripHtml = (value: string | null | undefined) =>
  (value || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

const slugifyService = (value: string, id: number) => {
  const slug = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return `${slug || 'dich-vu'}-${id}`
}

const resolveServiceImage = (service: ServiceResponseType, fallbackImg = defaultServiceImg) => {
  if (!service.SerIcon) return fallbackImg
  if (/^https?:\/\//i.test(service.SerIcon) || service.SerIcon.startsWith('/')) return service.SerIcon
  return fallbackImg
}

const resolveCatalogIcon = (service: ServiceResponseType) => resolveServiceImage(service, defaultServiceImg)

const getIdFromServiceSlug = (value: string | undefined) => {
  if (!value) return undefined
  const match = value.match(/-(\d+)$/)
  return match ? Number(match[1]) : undefined
}

const mapServiceDetailResponse = (service: ServiceResponseType, baseService?: ServiceDetail): ServiceDetail => {
  const desc = stripHtml(service.SerDescription || service.SerContent) || baseService?.desc || 'Thông tin dịch vụ đang được cập nhật trên HomeBooking.'
  const img = resolveServiceImage(service, baseService?.img || defaultServiceImg)

  return {
    id: service.Id,
    slug: baseService?.slug || slugifyService(service.SerName, service.Id),
    name: service.SerName || baseService?.name || '',
    categorySlug: baseService?.categorySlug || '',
    tag: baseService?.tag || 'Dịch vụ',
    desc,
    priceLabel: baseService?.priceLabel || 'Đang cập nhật',
    img,
    gallery: [img],
    features: baseService?.features || [
      { title: 'Đặt lịch nhanh', desc: 'Theo dõi và quản lý lịch hẹn trên ứng dụng' },
      { title: 'Thông tin minh bạch', desc: 'Chi tiết dịch vụ được cập nhật từ hệ thống HomeBooking' },
    ],
    includes: [desc],
  }
}

const getCatalogItems = (response: { Items?: ServiceResponseType[] } | ServiceResponseType[]) =>
  Array.isArray(response) ? response : response.Items || []

const getRandomItems = <T,>(items: T[], count: number) => {
  const shuffled = [...items]
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
  }
  return shuffled.slice(0, count)
}

const normalizeServiceCatalog = (categoryItems: ServiceResponseType[], serviceItems: ServiceResponseType[]) => {
  const parents = categoryItems.filter((item) => item.IsActived !== 0 && item.ServicePid === 0)
  const children = serviceItems.filter((item) => item.IsActived !== 0 && item.ServicePid > 0)

  if (parents.length === 0 || children.length === 0) return null

  const serviceCategories = parents.map<ServiceCategory>((parent) => ({
    name: parent.SerName,
    slug: slugifyService(parent.SerName, parent.Id),
    icon: resolveCatalogIcon(parent),
    iconBg: '#F4F9F8',
    iconColor: '#003F3C',
    desc: stripHtml(parent.SerDescription || parent.SerContent) || 'Danh m?c d?ch v? HomeBooking',
  }))

  const categoryById = new Map(
    parents.map((parent, index) => [
      parent.Id,
      { parent, category: serviceCategories[index] },
    ]),
  )

  const allServicesList = children.flatMap<ServiceDetail>((service) => {
    const group = categoryById.get(service.ServicePid)
    if (!group) return []

    const desc = stripHtml(service.SerDescription || service.SerContent) || 'Thông tin dịch vụ đang được cập nhật trên HomeBooking.'
    const img = resolveServiceImage(service)

    return [{
      id: service.Id,
      slug: slugifyService(service.SerName, service.Id),
      name: service.SerName,
      categorySlug: group.category.slug,
      tag: group.parent.SerName.toUpperCase(),
      desc,
      priceLabel: 'Đang cập nhật',
      img,
      gallery: [img],
      features: [
        { title: 'Đặt lịch nhanh', desc: 'Theo dõi và quản lý lịch hẹn trên ứng dụng' },
        { title: 'Thông tin minh bạch', desc: 'Chi tiết dịch vụ được cập nhật từ hệ thống HomeBooking' },
      ],
      includes: [desc],
    }]
  })

  if (allServicesList.length === 0) return null

  const featuredServices = getRandomItems(allServicesList, 7).map<FeaturedService>((service) => {
    const category = serviceCategories.find((item) => item.slug === service.categorySlug) || serviceCategories[0]

    return {
      name: service.name,
      desc: service.desc,
      icon: category?.icon || defaultServiceImg,
      iconColor: category?.iconColor || '#007a63',
      iconBg: category?.iconBg || '#e8f7f1',
      img: service.img,
    }
  })

  return { serviceCategories, allServicesList, featuredServices }
}

function useLandingServices() {
  const [remoteCategories, setRemoteCategories] = React.useState<ServiceResponseType[] | null>(null)
  const [remoteServices, setRemoteServices] = React.useState<ServiceResponseType[] | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    let isMounted = true

    Promise.all([
      serviceCatalogHttp2.getAllServices({
        servPid: 0,
        pagingOption: { pageNumber: 1, pageSize: 200 },
        orderByOption: [{ field: 'SerName', isDescending: false }],
      }),
      serviceCatalogHttp2.getAllServices({
        isOnlyChildren: true,
        pagingOption: { pageNumber: 1, pageSize: 200 },
        orderByOption: [{ field: 'SerName', isDescending: false }],
      }),
    ])
      .then(([categoryResponse, serviceResponse]) => {
        if (!isMounted) return
        const categories = getCatalogItems(categoryResponse)
        const services = getCatalogItems(serviceResponse)
        if (import.meta.env.DEV) {
          console.log('[service-catalog] raw categories response:', categoryResponse)
          console.log('[service-catalog] categories:', categories)
          console.log('[service-catalog] raw services response:', serviceResponse)
          console.log('[service-catalog] services:', services)
        }
        setRemoteCategories(categories)
        setRemoteServices(services)
      })
      .catch((error) => {
        console.error('Failed to load service catalog', error)
        if (isMounted) {
          setRemoteCategories([])
          setRemoteServices([])
        }
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const normalized = React.useMemo(() => {
    const data = normalizeServiceCatalog(remoteCategories || [], remoteServices || [])
    if (import.meta.env.DEV) {
      console.log('[service-catalog] normalized:', data)
    }
    return data
  }, [remoteCategories, remoteServices])

  return {
    serviceCategories: normalized?.serviceCategories || [],
    allServicesList: normalized?.allServicesList || [],
    featuredServices: normalized?.featuredServices || [],
    isLoading,
  }
}

export function ServicesListingPage() {
  const { serviceCategories, allServicesList, isLoading } = useLandingServices();
  const [activeNavCategory, setActiveNavCategory] = React.useState('');
  const isScrollingRef = React.useRef(false);
  const scrollTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileTabsRef = React.useRef<HTMLDivElement | null>(null);

  const handleNavClick = (slug: string) => {
    // Set active immediately and pause scrollspy to prevent flicker
    setActiveNavCategory(slug);
    isScrollingRef.current = true;
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);

    const el = document.getElementById(`category-${slug}`);
    if (el) {
      const isMobileLayout = window.matchMedia('(max-width: 1024px)').matches;
      const topOffset = isMobileLayout ? 112 : 80;
      const top = el.getBoundingClientRect().top + window.scrollY - topOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  React.useEffect(() => {
    if (serviceCategories.length > 0 && !activeNavCategory) {
      setActiveNavCategory(serviceCategories[0].slug);
    }
  }, [activeNavCategory, serviceCategories]);

  React.useEffect(() => {
    if (serviceCategories.length === 0) return;
    const onScroll = () => {
      // Skip scrollspy while programmatic scroll is in progress
      if (isScrollingRef.current) return;
      const isMobileLayout = window.matchMedia('(max-width: 1024px)').matches;
      const scrollPos = window.scrollY + (isMobileLayout ? 150 : 120);
      let currentSlug = serviceCategories[0]?.slug || '';

      for (const cat of serviceCategories) {
        const el = document.getElementById(`category-${cat.slug}`);
        if (el && scrollPos >= el.offsetTop) {
          currentSlug = cat.slug;
        }
      }

      setActiveNavCategory((value) => (value === currentSlug ? value : currentSlug));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [serviceCategories]);

  React.useEffect(() => {
    if (!activeNavCategory) return;
    const tab = mobileTabsRef.current?.querySelector<HTMLButtonElement>(`[data-category-tab="${activeNavCategory}"]`);
    tab?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeNavCategory]);

  return (
    <main className="bg-white text-slate-800 pt-[58px] max-[768px]:pt-[56px] max-[520px]:pt-[48px]">

      {/* Page Banner */}
      <div
        className="bg-white bg-cover bg-center px-0"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 45%, rgba(255,255,255,0.52) 100%), url(${bgDichVuImg})` }}
      >
        <div className={ui.container}>
          <div className="flex min-h-[220px] items-center justify-between gap-6 py-9 max-[768px]:min-h-[190px] max-[768px]:py-7 max-[640px]:min-h-[165px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:justify-center max-[640px]:gap-4">
            <div className="max-w-[560px]">
              <span className="mb-1 inline-flex rounded bg-emerald-50 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-emerald-700">Hệ sinh thái dịch vụ</span>
              <h1 className="mt-1 font-heading text-[clamp(1.55rem,3vw,2.15rem)] font-extrabold leading-tight text-slate-900">
                Dịch vụ của <span className="text-[#003F3C]">HomeBooking</span>
              </h1>
              <p className="mt-1 text-[14px] text-slate-500">Đặt dịch vụ nhanh chóng, an tâm mọi nhu cầu gia đình</p>
            </div>
            <div className="relative hidden min-w-[300px] items-center justify-end gap-4 pr-4 max-[900px]:min-w-[250px] max-[768px]:hidden md:flex">
              <div className="flex flex-col gap-2">
                <a href="#footer" className="flex min-h-10 min-w-[145px] items-center gap-2.5 rounded-lg border border-[#003F3C]/10 bg-white/80 px-3 py-2 text-[#003F3C] shadow-[0_10px_20px_rgba(0,63,60,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white">
                  <img src={appStoreIcon} alt="" className="size-7 object-contain" />
                  <span className="flex flex-col items-start leading-none">
                    <span className="text-[0.52rem] font-bold uppercase text-slate-400">Tải xuống trên</span>
                    <span className="mt-1 text-[0.84rem] font-extrabold">App Store</span>
                  </span>
                </a>
                <a href="#footer" className="flex min-h-10 min-w-[145px] items-center gap-2.5 rounded-lg border border-[#003F3C]/10 bg-white/80 px-3 py-2 text-[#003F3C] shadow-[0_10px_20px_rgba(0,63,60,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white">
                  <img src={chPlayIcon} alt="" className="size-7 object-contain" />
                  <span className="flex flex-col items-start leading-none">
                    <span className="text-[0.52rem] font-bold uppercase text-slate-400">Tải trên</span>
                    <span className="mt-1 text-[0.84rem] font-extrabold">Google Play</span>
                  </span>
                </a>
              </div>
              <img src="https://homebooking.global/assets/mock-mobile.png" alt="Ứng dụng HomeBooking" className="h-[250px] w-auto rotate-6 object-contain drop-shadow-[0_18px_20px_rgba(0,0,0,0.2)] max-[900px]:h-[205px]" />
            </div>
            <div className="hidden">
              <span className="text-[13px] font-semibold text-slate-500">{serviceCategories.length} danh mục</span>
              <span className="text-[13px] font-semibold text-slate-500">{allServicesList.length} dịch vụ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal scroll tabs — sticky below header+banner */}
      <div ref={mobileTabsRef} className="hidden max-[1024px]:flex sticky top-[56px] z-20 items-center gap-2 overflow-x-auto no-scrollbar bg-white/95 backdrop-blur px-3 py-2 max-[520px]:top-[48px]">
        {serviceCategories.map((cat) => {
          const isActive = activeNavCategory === cat.slug;
          return (
            <button key={cat.slug} data-category-tab={cat.slug} onClick={() => handleNavClick(cat.slug)} type="button"
              className={cn('h-8 px-3 rounded-full text-[13px] font-semibold shrink-0 flex items-center gap-1.5 transition-colors',
                isActive ? 'bg-[#FEF4ED] text-[#002A28]' : 'bg-white text-slate-600 hover:bg-slate-50'
              )}>
              <img src={cat.icon} alt="" className="size-4 shrink-0 rounded object-cover" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>


      {/* Main layout: sidebar + content */}
      <div className="py-8 max-[520px]:py-4">
        <div className={ui.container}>
          <div className="relative z-0 bg-white" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>

            {/* Sidebar — sticky desktop */}
            <div className="sticky top-[70px] hidden w-[244px] shrink-0 self-start min-[1025px]:block">
              <div className="flex max-h-[calc(100vh-90px)] flex-col overflow-hidden rounded-xl border border-slate-100 bg-white">
                <div className="px-4 py-3 shrink-0 border-b border-slate-100">
                  <h2 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <span className="h-3 w-1 rounded bg-[#003F3C]"></span>
                    Danh mục dịch vụ
                  </h2>
                </div>
                <div className="custom-scrollbar flex flex-1 flex-col gap-0.5 overflow-y-auto p-2">
                  {serviceCategories.map((cat) => {
                    const count = allServicesList.filter(s => s.categorySlug === cat.slug).length;
                    const isActive = activeNavCategory === cat.slug;
                    return (
                      <button key={cat.slug} onClick={() => handleNavClick(cat.slug)} type="button"
                        className={cn(
                          'w-full text-left flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-[14px] font-medium transition-all cursor-pointer',
                          isActive ? 'bg-[#FEF4ED] text-[#002A28]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        )}>
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="size-6 shrink-0 rounded-md flex items-center justify-center [&_svg]:w-3.5 [&_svg]:h-3.5"
                            style={{ backgroundColor: cat.iconBg, color: cat.iconColor }}>
                            <img src={cat.icon} alt="" className="size-full rounded object-cover" />
                          </span>
                          <span className="truncate leading-none">{cat.name}</span>
                        </div>
                        {count > 0 && (
                          <span className={cn('text-[11px] font-bold px-1.5 py-0.5 rounded-full shrink-0',
                            'bg-slate-100 text-slate-500')}>
                            {count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content list */}
            <div className="flex flex-col gap-6 bg-white max-[520px]:gap-7" style={{ flex: 1, minWidth: 0 }}>
              {isLoading && serviceCategories.length === 0 && (
                <div className="rounded-xl border border-slate-100 bg-white p-8 text-center text-sm font-semibold text-slate-500">
                  Đang tải danh mục dịch vụ...
                </div>
              )}

              {!isLoading && serviceCategories.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-sm font-semibold text-slate-500">
                  Chưa có danh mục dịch vụ để hiển thị.
                </div>
              )}

              {serviceCategories.map((cat) => {
                const subs = allServicesList.filter(s => s.categorySlug === cat.slug);
                return (
                  <div key={cat.slug} id={`category-${cat.slug}`}
                    className="bg-white rounded-xl border border-slate-100 p-5 scroll-mt-24 overflow-hidden max-[1024px]:scroll-mt-32 max-[520px]:rounded-none max-[520px]:border-0 max-[520px]:p-0">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 max-[520px]:mb-3 max-[520px]:border-b-0 max-[520px]:pb-0">
                      <span className="size-9 rounded-xl flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5 shrink-0 max-[520px]:hidden"
                        style={{ backgroundColor: cat.iconBg, color: cat.iconColor }}>
                        <img src={cat.icon} alt="" className="size-full rounded object-cover" />
                      </span>
                      <div className="min-w-0">
                        <h2 className="text-[15px] font-bold text-slate-900 leading-snug max-[520px]:text-[14px] max-[520px]:leading-5">
                          {cat.name}
                          <span className="hidden text-slate-400 font-semibold max-[520px]:inline"> ({subs.length})</span>
                        </h2>
                        <p className="text-[13px] text-slate-400 max-[520px]:hidden">{cat.desc}</p>
                      </div>
                      <span className="ml-auto text-[11px] font-bold bg-emerald-50 text-[#003F3C] px-2.5 py-1 rounded-full shrink-0 max-[520px]:hidden">
                        {subs.length} dịch vụ
                      </span>
                    </div>

                    {/* Cards */}
                    {subs.length > 0 ? (
                      <div className="grid grid-cols-4 gap-4 max-[1280px]:grid-cols-3 max-[900px]:grid-cols-2 max-[520px]:grid-cols-2 max-[520px]:gap-3">
                        {subs.map((service) => (
                          <Link key={service.slug} to={`/dich-vu/${service.slug}`}
                            className="group flex min-h-[180px] flex-col overflow-hidden rounded-lg border border-slate-200/60 bg-white hover:-translate-y-0.5 hover:border-[#003F3C]/20 hover:bg-slate-50/30 transition-all duration-300 hover:no-underline max-[520px]:min-h-[220px] max-[520px]:hover:translate-y-0">
                            {/* Image */}
                            <div className="relative h-[110px] overflow-hidden bg-slate-100 shrink-0 max-[520px]:h-[96px]">
                              <img src={service.img} alt={service.name}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                            </div>
                            {/* Body */}
                            <div className="flex grow flex-col bg-white p-3 max-[520px]:p-3">
                              {/* Badge */}
                              <div className="mb-2 inline-flex max-w-full self-start items-center gap-1.5 rounded-lg px-2 py-1 text-[11px] font-semibold max-[520px]:text-[0.66rem] [&_svg]:w-3 [&_svg]:h-3 max-[520px]:[&_svg]:w-2.5 max-[520px]:[&_svg]:h-2.5"
                                style={{ backgroundColor: cat.iconBg, color: cat.iconColor }}>
                                <img src={cat.icon} alt="" className="size-3 shrink-0 rounded object-cover max-[520px]:size-2.5" />
                                <span className="truncate">{cat.name}</span>
                              </div>
                              {/* Title */}
                              <p className="line-clamp-2 min-h-[2.8rem] text-[14px] font-medium leading-relaxed text-slate-800 grow group-hover:text-[#003F3C] transition-colors duration-300 max-[520px]:min-h-[2.7rem] max-[520px]:leading-5">
                                {service.name}
                              </p>
                              {/* Footer */}
                              <div className="mt-auto flex items-end justify-between border-t border-slate-100 pt-2.5">
                                <div className="flex flex-col gap-0.5">
                                  <span className="text-[11px] font-medium uppercase text-slate-400">Giá chỉ từ</span>
                                  <span className="text-[13px] font-bold text-[#F3A365]">{service.priceLabel}</span>
                                </div>
                                <span className="grid size-7 place-items-center rounded-full bg-emerald-50 text-[#003F3C] transition-colors duration-300 group-hover:bg-[#003F3C] group-hover:text-white">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="py-6 text-center text-[14px] text-slate-400 bg-white rounded-lg border border-dashed border-slate-200">
                        Dịch vụ đang được cập nhật trên App HomeBooking.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
      {false && <AppDownloadBand
        title="Đặt mọi dịch vụ trong một ứng dụng"
        description="Tải HomeBooking để xem danh mục dịch vụ, đặt lịch nhanh chóng và theo dõi lịch hẹn thuận tiện ngay trên điện thoại."
      />}
    </main>
  );
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { allServicesList, isLoading } = useLandingServices();
  const [detailService, setDetailService] = React.useState<ServiceDetail | null>(null);
  const [isDetailLoading, setIsDetailLoading] = React.useState(false);
  const [sliderIndex, setSliderIndex] = React.useState(0);

  const goToDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  const listService = allServicesList.find((s) => s.slug === slug);
  const detailId = listService?.id || getIdFromServiceSlug(slug);
  const service = detailService || listService;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  React.useEffect(() => {
    let isMounted = true;
    setDetailService(null);
    setSliderIndex(0);

    if (!detailId) {
      return () => {
        isMounted = false;
      };
    }

    setIsDetailLoading(true);
    serviceCatalogHttp2.getServiceDetail({ Id: detailId })
      .then((response) => {
        if (!isMounted) return;
        if (import.meta.env.DEV) {
          console.log('[service-catalog] raw detail response:', response);
        }
        setDetailService(mapServiceDetailResponse(response, listService));
      })
      .catch((error) => {
        console.error('Failed to load service detail', error);
      })
      .finally(() => {
        if (isMounted) setIsDetailLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [detailId, listService]);

  if (!service && (isLoading || isDetailLoading)) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-white pt-[58px] text-sm font-semibold text-slate-500">
        Đang tải dịch vụ...
      </main>
    );
  }

  if (!service) {
    return <Navigate to="/dich-vu" replace />;
  }

  const slides = [service.img, ...service.gallery];

  const handlePrevSlide = () => {
    setSliderIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setSliderIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getIncludeIcon = (index: number) => {
    const icons = [
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 18-18" /><path d="m15 6 3 3" /><path d="m5 16 3 3" /></svg>,
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>,
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9h20v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9Z" /><path d="M7 5v4M17 5v4" /></svg>,
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 12h8M12 8h0M12 16h0" /></svg>,
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
    ];
    return icons[index % icons.length];
  };

  return (
    <main className="bg-white text-slate-800 pt-[58px] max-[768px]:pt-[52px]" id="service-detail">
      {/* Breadcrumbs */}
      <div className="border-b border-slate-100">
        <div className={cn(ui.container, 'flex flex-wrap items-center gap-1.5 py-3 text-xs font-medium text-slate-400')}>
          <Link className="transition hover:text-[#003F3C]" to="/">Trang chủ</Link>
          <span className="text-slate-300">›</span>
          <Link className="transition hover:text-[#003F3C]" to="/dich-vu">Dịch vụ</Link>
          <span className="text-slate-300">›</span>
          <span className="text-slate-700 font-semibold">{service.name}</span>
        </div>
      </div>

      {/* Main Details Section */}
      <section className="py-6 bg-white max-[640px]:py-4">
        <div className={cn(ui.container, "grid max-w-[980px] grid-cols-[minmax(0,1fr)_340px] gap-6 items-start max-[900px]:grid-cols-1 max-[640px]:gap-4")}>

          {/* Left Column: Image Slider */}
          <div className="order-2 flex flex-col gap-3 max-[900px]:order-2">
            <div className="relative w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-100" style={{ aspectRatio: '16/11' }}>
              <img src={service.img} className="size-full object-cover transition-all duration-500" alt={service.name} />

              <button onClick={handlePrevSlide} className="hidden absolute left-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-white/95 shadow-md text-[#003F3C] items-center justify-center hover:bg-white transition-colors z-10" aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button onClick={handleNextSlide} className="hidden absolute right-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-white/95 shadow-md text-[#003F3C] items-center justify-center hover:bg-white transition-colors z-10" aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>

            {/* Dots */}
            <div className="hidden items-center justify-center gap-1.5">
              {slides.map((_, idx) => (
                <button key={idx} onClick={() => setSliderIndex(idx)}
                  className={cn("h-1.5 rounded-full transition-all duration-200", sliderIndex === idx ? "bg-[#003F3C] w-5" : "w-1.5 bg-slate-300 hover:bg-slate-400")}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Info & Booking */}
          <div className="order-1 flex flex-col items-start">
            <span className="mb-2 inline-flex rounded-md bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#007A63] border border-emerald-100">
              {service.tag}
            </span>
            <h1 className="mb-1.5 font-heading text-[clamp(1.35rem,3vw,1.7rem)] font-extrabold text-slate-900 leading-tight">
              {service.name}
            </h1>
            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="hidden items-center gap-2">
                <span className="flex items-center gap-0.5 text-[#E8A365]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </span>
                <strong className="text-slate-900">0.0</strong>
                <span className="text-slate-400">{'(Ch\u01b0a c\u00f3 l\u01b0\u1ee3t \u0111\u00e1nh gi\u00e1)'}</span>
              </span>
              <span className="font-semibold text-slate-500">{'Gi\u00e1:'} <strong className="text-[#E8A365]">{'\u0110ang c\u1eadp nh\u1eadt'}</strong></span>
            </div>
            <div className="hidden">
              <span className="flex items-center gap-2">
                <span className="text-[#E8A365]">â˜†â˜†â˜☆â˜†â˜†</span>
                <strong className="text-slate-900">0.0</strong>
                <span className="text-slate-400">(ChÆ°a cÃ³ lÆ°á»£t Ä‘Ã¡nh giÃ¡)</span>
              </span>
              <span className="h-4 w-px bg-slate-200"></span>
              <span className="font-semibold text-slate-500">GiÃ¡: <strong className="text-[#E8A365]">Äang cáº­p nháº­t</strong></span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-500">
              {service.desc}
            </p>

            {/* 3 selling points */}
            <div className="hidden grid-cols-3 gap-2.5 mb-4 w-full max-[520px]:grid-cols-1">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50/70 border border-slate-100 max-[520px]:items-start max-[520px]:text-left">
                  <span className="size-9 rounded-full border border-emerald-200/60 text-[#007A63] flex items-center justify-center mb-2 bg-white">
                    {idx === 0 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 11 2 2 4-4" /></svg>
                    )}
                    {idx === 1 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>
                    )}
                    {idx === 2 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                    )}
                  </span>
                  <strong className="block text-[11px] font-bold text-slate-800 leading-tight mb-0.5">{feat.title}</strong>
                  <span className="text-[10px] text-slate-400 leading-normal">{feat.desc}</span>
                </div>
              ))}
            </div>

            {/* Booking callout box */}
            <div className="hidden w-full rounded-xl border border-slate-200 bg-slate-50 p-4 flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#007A63] border border-emerald-200/60">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.05 9.91a16 16 0 0 0 6.04 6.04l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" /></svg>
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">Trải nghiệm dịch vụ nhanh chóng và tiện lợi</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Mọi thao tác đặt lịch và thanh toán chỉ có trên ứng dụng HomeBooking.</p>
                </div>
              </div>
              <button className={cn(ui.btn, ui.btnPrimary, "w-full rounded-full py-2.5 text-xs font-bold flex items-center justify-center gap-1.5")} onClick={goToDownload}>
                Tải ứng dụng ngay
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dịch vụ bao gồm Section */}
      <div className="mt-14 max-[640px]:mt-10">
      <AppDownloadBand
        title="Tải app để đặt dịch vụ này"
        description={`Đặt ${service.name} trên HomeBooking để chọn thời gian phù hợp, nhận thông tin dịch vụ và theo dõi lịch hẹn dễ dàng.`}
      />
      </div>

      <section className="hidden pb-8 bg-white max-[640px]:pb-6">
        <div className={cn(ui.container, 'max-w-[980px]')}>
          <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-6">Dịch vụ bao gồm</h2>
          <div className="grid grid-cols-3 gap-3 max-[640px]:grid-cols-1">
            {service.includes.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
                <div className="size-10 rounded-xl bg-emerald-50 border border-emerald-100 text-[#007A63] flex items-center justify-center shrink-0 [&_svg]:size-5">
                  {getIncludeIcon(idx)}
                </div>
                <p className="text-[12px] font-semibold text-slate-700 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tại sao chọn HomeBooking Section */}
      <section className="hidden py-10 border-t border-slate-100 bg-slate-50/40">
        <div className={ui.container}>
          <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-8 text-center">Tại sao chọn HomeBooking?</h2>
          <div className="grid grid-cols-4 gap-4 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {[
              {
                title: 'Đối tác uy tín', desc: 'Được xác thực kỹ lưỡng',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 11 2 2 4-4" /></svg>
              },
              {
                title: 'Giá cả minh bạch', desc: 'Không phát sinh chi phí',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              },
              {
                title: 'Đặt lịch linh hoạt', desc: 'Chọn thời gian phù hợp',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect width="18" height="18" x="3" y="4" rx="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
              },
              {
                title: 'Hỗ trợ 24/7', desc: 'Đội ngũ chăm sóc tâm huyết',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.05 9.91a16 16 0 0 0 6.04 6.04l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" /></svg>
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="size-14 rounded-full bg-emerald-50 flex items-center justify-center mb-3 border border-emerald-100 text-[#003F3C]">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom App Banner (Exactly matching light gray-green color in mockup detail) */}
      <section className="hidden py-12 bg-slate-50/30 border-t border-slate-100">
        <div className={ui.container}>
          <div className="rounded-2xl border border-slate-200/60 bg-[#F4F9F8] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden flex items-center justify-between gap-8 max-[900px]:flex-col max-[900px]:items-stretch" data-aos="zoom-in">

            <div className="relative z-10 flex-1 flex flex-col items-start">
              <h3 className="text-2xl font-extrabold text-[#003F3C] mb-3 leading-tight">
                Đặt lịch dễ dàng <br /> – Trải nghiệm trọn vẹn
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 max-w-lg">
                Tải ứng dụng HomeBooking để đặt lịch nhanh chóng, nhận nhiều ưu đãi và thanh toán tiện lợi.
              </p>
              <button className={cn(ui.btn, ui.btnPrimary, "mb-8 px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 self-start shadow-sm")} onClick={goToDownload}>
                Tải ứng dụng ngay
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              </button>
            </div>

            <div className="relative z-10 flex items-center gap-6 max-[900px]:justify-center">
              <div className="p-2 bg-white rounded-xl shadow-md border border-slate-100 shrink-0">
                <img className="size-20 rounded-lg object-cover" src={qrCodeImg} alt="QR Code" />
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <a className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold text-slate-700 shadow-sm transition hover:bg-slate-50" href="#footer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.17c.65-.79 1.09-1.9 1-3-.99.04-2.19.67-2.9 1.49-.62.72-1.16 1.84-1.01 2.92 1.11.09 2.24-.59 2.91-1.41Z" /></svg>
                  <span>TẢI TRÊN <br /><span className="text-xs font-black text-slate-800">App Store</span></span>
                </a>
                <a className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold text-slate-700 shadow-sm transition hover:bg-slate-50" href="#footer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3.25c-.28 0-.5.22-.5.5v16.5c0 .28.22.5.5.5h.19l9.31-9.31-9.31-9.31H5Zm1.69.75L15.31 12 6.69 20.06V4ZM16.72 10.6l3.59-3.59c.39-.39 1.02-.39 1.41 0a1 1 0 0 1 0 1.41l-3.59 3.59-1.41-1.41Zm0 2.8 1.41-1.41 3.59 3.59a1 1 0 0 1 0 1.41c-.39.39-1.02.39-1.41 0l-3.59-3.59Z" /></svg>
                  <span>TẢI TRÊN <br /><span className="text-xs font-black text-slate-800">Google Play</span></span>
                </a>
              </div>
              <div className="w-[110px] aspect-[9/18] bg-slate-900 rounded-[30px] p-1.5 shadow-2xl border-2 border-slate-800 relative hidden md:block shrink-0">
                <div className="size-full bg-white rounded-[22px] overflow-hidden flex flex-col p-2 pt-4 relative">
                  <div className="flex items-center gap-1 mb-1.5">
                    <img src="https://homebooking.global/assets/Logo-Hombooking---khong-nen.png" className="h-2.5 w-auto" alt="Logo" />
                  </div>
                  <div className="grow bg-slate-50 rounded-lg flex flex-col items-center justify-center p-1 text-[8px] font-bold text-[#003F3C] gap-1">
                    <img src="https://homebooking.global/assets/Logo-Hombooking---khong-nen.png" className="h-4 w-auto" alt="App logo" />
                    <span className="text-[6px] tracking-wide text-orange-500 uppercase font-black">HOME BOOKING</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
} function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isIntroFinished, setIsIntroFinished] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => {
        scrollToSection(sectionId);
      }, 250);
    } else {
      scrollToSection(sectionId);
    }
  };

  const goToNewsPage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    navigate('/tin-tuc');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    document.documentElement.style.backgroundColor = '#fff';
    document.body.style.backgroundColor = '#fff';
    window.requestAnimationFrame(() => {
      AOS.refreshHard();
    });
  }, [location.pathname]);

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
          <nav className={cn(ui.container, 'flex h-14 items-center justify-between gap-4 max-[520px]:h-12 max-[520px]:gap-2')}>
            <div className="flex items-center gap-2.5 max-[520px]:gap-2">
              <button
                className="hidden size-9 place-items-center rounded-lg border border-[#003F3C]/15 bg-white/85 text-[#003F3C] transition-all duration-300 hover:bg-emerald-50 max-[900px]:grid max-[520px]:size-8"
                type="button"
                aria-label="Mở menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((value) => !value)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line className={cn('origin-center transition-all duration-300', isMobileMenuOpen && 'translate-y-[5px] rotate-45')} x1="4" y1="7" x2="20" y2="7" />
                  <line className={cn('origin-center transition-all duration-300', isMobileMenuOpen && 'opacity-0')} x1="4" y1="12" x2="20" y2="12" />
                  <line className={cn('origin-center transition-all duration-300', isMobileMenuOpen && '-translate-y-[5px] -rotate-45')} x1="4" y1="17" x2="20" y2="17" />
                </svg>
              </button>

              <Link className="flex items-center" to="/" onClick={handleNavClick('top')}>
                <img src="https://homebooking.global/assets/Logo-Hombooking---khong-nen.png" className="h-6 w-auto max-[520px]:h-[18px]" alt="HomeBooking Logo" />
              </Link>
            </div>

            <div className="flex items-center gap-5 text-sm font-semibold text-slate-700 max-[900px]:hidden">
              <Link className="transition hover:text-[#003F3C]" to="/" onClick={handleNavClick('top')}>Trang chủ</Link>
              <Link className="transition hover:text-[#003F3C]" to="/dich-vu">Dịch vụ</Link>
              <Link className="transition hover:text-[#003F3C]" to="/tin-tuc" onClick={goToNewsPage}>Tin tức</Link>
              <Link className="transition hover:text-[#003F3C]" to="/" onClick={handleNavClick('footer')}>Liên hệ</Link>
            </div>

            <div className="flex items-center gap-2 max-[520px]:gap-1.5">
              <a className={cn(ui.btn, ui.btnOutline, 'px-3 py-1.5 max-[900px]:hidden')} href="#partner-banners" onClick={handleNavClick('partner-banners')}>Trở thành đối tác</a>
              <a className={cn(ui.btn, ui.btnPrimary, 'px-3 py-1.5 max-[520px]:px-2.5 max-[520px]:py-1.5 max-[520px]:text-xs')} href="#about" onClick={handleNavClick('about')}>Tải app</a>
            </div>
          </nav>
          <div
            className={cn(
              ui.container,
              'absolute left-0 right-0 top-full hidden origin-top pt-2 transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-[900px]:block',
              isMobileMenuOpen ? 'visible translate-y-0 scale-y-100 opacity-100' : 'invisible pointer-events-none -translate-y-4 scale-y-95 opacity-0',
            )}
          >
            <div className="grid gap-1 rounded-lg border border-emerald-950/10 bg-white/96 p-2 text-sm font-bold text-slate-700 shadow-[0_18px_36px_rgba(0,63,60,0.14)] backdrop-blur-xl">
              <Link className="rounded-lg px-3 py-2 transition hover:bg-emerald-50 hover:text-[#003F3C]" to="/" onClick={handleNavClick('top')}>Trang chủ</Link>
              <Link className="rounded-lg px-3 py-2 transition hover:bg-emerald-50 hover:text-[#003F3C]" to="/dich-vu" onClick={() => setIsMobileMenuOpen(false)}>Dịch vụ</Link>
              <Link className="rounded-lg px-3 py-2 transition hover:bg-emerald-50 hover:text-[#003F3C]" to="/tin-tuc" onClick={goToNewsPage}>Tin tức</Link>
              <Link className="rounded-lg px-3 py-2 transition hover:bg-emerald-50 hover:text-[#003F3C]" to="/" onClick={handleNavClick('partner-banners')}>Đối tác</Link>
              <Link className="rounded-lg px-3 py-2 transition hover:bg-emerald-50 hover:text-[#003F3C]" to="/" onClick={handleNavClick('footer')}>Liên hệ</Link>
            </div>
          </div>
        </header>

        <div
          key={location.pathname}
          className="relative isolate z-0 min-h-screen overflow-visible bg-white"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tin-tuc" element={<NewsListingPage />} />
            <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} />
            <Route path="/dich-vu" element={<ServicesListingPage />} />
            <Route path="/dich-vu/:slug" element={<ServiceDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* 11. Footer */}
        <footer
          className="relative overflow-hidden bg-slate-50 bg-cover bg-center py-9 pb-6"
          id="footer"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(248,250,252,0.94) 0%, rgba(248,250,252,0.9) 48%, rgba(248,250,252,0.82) 100%), url(${bgFooterImg})` }}
        >
          <div className={ui.container}>
            <div className="grid grid-cols-[1fr_1fr] items-center gap-8 max-[768px]:grid-cols-1 max-[768px]:items-start max-[768px]:gap-6">
              <div className="flex flex-col items-start">
                <Link className="inline-flex" to="/" onClick={handleNavClick('top')}>
                  <img src="https://homebooking.global/assets/Logo-Hombooking---khong-nen.png" className="h-5 w-auto max-[520px]:h-[18px]" alt="HomeBooking Logo" />
                </Link>
                <h4 className="mt-5 text-xs font-extrabold uppercase tracking-wide text-slate-900">Liên hệ</h4>
                <div className="mt-3 flex flex-col gap-2.5 text-sm leading-6 text-slate-500">

                  <span className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-emerald-50 text-[#003F3C]">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-10 6L2 7" />
                      </svg>
                    </span>
                    <span><strong className="text-slate-800">Email:</strong> info@365ejsc.com</span>
                  </span>
                  <span className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-emerald-50 text-[#003F3C]">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <span className="flex flex-col gap-1">
                      <span><strong className="text-slate-800">Địa chỉ mới:</strong> P.903, Tầng 9, Tòa nhà Diamond Plaza, 34 Lê Duẩn, P. Sài Gòn, TPHCM</span>
                      <span><strong className="text-slate-800">Địa chỉ cũ:</strong> P.903, Tầng 9, Tòa nhà Diamond Plaza, 34 Lê Duẩn, P. Bến Nghé, Q1, TPHCM</span>
                    </span>
                  </span>
                </div>
              </div>

              <div className="p-0">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-900">Đăng ký nhận thông báo</h4>
                <p className="mt-2 text-sm leading-6 text-slate-500">Nhận tin mới, ưu đãi và cập nhật dịch vụ từ HomeBooking.</p>
                <form className="mt-4 flex gap-2 max-[520px]:flex-col" onSubmit={(e) => { e.preventDefault(); alert('Đăng ký nhận tin thành công!'); }}>
                  <input
                    className="min-h-11 flex-1 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#003F3C] focus:ring-2 focus:ring-emerald-100"
                    type="email"
                    placeholder="Email của bạn"
                    aria-label="Email đăng ký nhận thông báo"
                    required
                  />
                  <button className={cn(ui.btn, ui.btnPrimary, 'min-h-11 px-5 shadow-none cursor-pointer')} type="submit">Đăng ký</button>
                </form>
              </div>
            </div>

            <div className="mt-7 border-t border-slate-200 pt-5 text-center">
              <p className="text-sm text-slate-500">© 2026 HomeBooking. Siêu app đa dịch vụ.</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}

export default App
