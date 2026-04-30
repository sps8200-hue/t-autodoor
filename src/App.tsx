import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Tag, 
  Layers, 
  Clock, 
  PhoneCall, 
  Lock, 
  Mail, 
  MapPin, 
  Phone,
  MessageCircle,
  X,
  Check,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  User,
  Upload,
  FileText,
  Trash2,
  Plus,
  Settings,
  Edit,
  Image as ImageIcon
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  images?: string[];
}



const features = [
  {
    icon: ShieldCheck,
    title: "확실한 A/S 보증",
    description: "핵심 부품 및 모터에 대한 철저한 사후관리를 보장하여 안심하고 사용하실 수 있습니다."
  },
  {
    icon: Tag,
    title: "정찰제 시공",
    description: "숨겨진 추가 비용이나 막바지 청구 없이 투명하고 합리적인 견적을 제공합니다."
  },
  {
    icon: Layers,
    title: "최고급 자재 사용",
    description: "안전성이 검증된 프리미엄 강화유리와 견고한 고급 프레임만을 엄선하여 사용합니다."
  },
  {
    icon: Clock,
    title: "철저한 납기일 준수",
    description: "고객과의 약속된 일정을 엄수하며, 신속하고 오차 없는 시공을 원칙으로 합니다."
  }
];

const processes = [
  { step: "01", title: "현장 방문 및 실측", desc: "공간의 특성과 라이프스타일을 파악하기 위해 심도 있는 현장 상담과 정밀 실측을 진행합니다." },
  { step: "02", title: "맞춤형 설계 제안", desc: "공간 효율성과 편의성을 극대화하는 최적의 프레임과 구동 방식 동선을 설계합니다." },
  { step: "03", title: "자재 및 디자인 선정", desc: "전체 인테리어와 조화를 이루는 프리미엄 유리 소재, 프레임 마감, 컬러를 결정합니다." },
  { step: "04", title: "정밀 시공 및 마감", desc: "태양강화자동문의 베테랑 시공팀이 오차 없는 정밀한 설치와 완벽한 마감을 제공합니다." }
];

const services = [
  {
    title: "거실 프리미엄 자동문",
    desc: "개방감과 편안함을 동시에 선사하는 넓은 공간의 자동 도어.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/006b8d9d-72b2-4bb6-8acc-c651455985b3_800w.png"
  },
  {
    title: "주방 슬라이딩 중문",
    desc: "냄새 차단과 심미성을 모두 만족시키는 스마트한 키친 도어.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc09d1a1-3bd4-412b-81b3-bfec67c56268_800w.png"
  },
  {
    title: "침실 맞춤형 중문",
    desc: "완벽한 방음과 단열로 개인의 휴식을 지켜주는 프라이빗 도어.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12169933-e42c-46a2-be5c-b54ab938eabb_800w.png"
  },
  {
    title: "욕실 특수 강화유리",
    desc: "호텔과 같은 품격을 더해주는 안전한 특수 유리 파티션.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "드레스룸 & 오피스 특수 도어",
    desc: "세련된 마감처리가 돋보이는 공간 분리용 시스템 도어.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91dadff6-dc1f-4e66-b10d-7969fe608c8e_800w.png",
    wide: true
  }
];

const initialPortfolio: PortfolioItem[] = [
  {
    id: "project-1",
    title: "성수동 주상복합 아파트 펜트하우스",
    desc: "모던하고 미니멀한 인테리어에 맞추어 초슬림 자동문을 시공하였습니다. 프레임의 노출을 최소화하고 유리의 투명성을 극대화하여 개방감을 확보했습니다.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/006b8d9d-72b2-4bb6-8acc-c651455985b3_800w.png",
    images: [
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/006b8d9d-72b2-4bb6-8acc-c651455985b3_800w.png",
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc09d1a1-3bd4-412b-81b3-bfec67c56268_800w.png"
    ]
  },
  {
    id: "project-2",
    title: "강남 IT 기업 사무실 입구",
    desc: "대형 사이즈의 자동문을 설치하여 통행의 편의성과 보안을 동시에 만족시켰습니다. 스마트 오피스 시스템과 연동하여 보안성을 높였습니다.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91dadff6-dc1f-4e66-b10d-7969fe608c8e_800w.png",
    images: [
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91dadff6-dc1f-4e66-b10d-7969fe608c8e_800w.png",
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12169933-e42c-46a2-be5c-b54ab938eabb_800w.png"
    ]
  },
  {
    id: "project-3",
    title: "한남동 단독주택 차고 도어",
    desc: "고속 자동 개폐 기능을 갖춘 산업용 스펙의 주거용 폴딩 도어입니다. 외부 디자인과 조화를 이루는 메탈 텍스처를 적용했습니다.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc09d1a1-3bd4-412b-81b3-bfec67c56268_800w.png"
  }
];

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}

const initialTestimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "김민수",
    role: "인테리어 디자이너",
    text: "현장 상황이 까다로웠음에도 불구하고 실측부터 시공까지 완벽하게 처리해주셨습니다. 특히 프레임 마감이 정밀해서 고객 만족도가 매우 높습니다.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "t-2",
    name: "이지혜",
    role: "주부 / 아파트 입주민",
    text: "아기 때문에 소음이 걱정되었는데, 자동문이 정말 조용하게 열리고 닫혀서 대만족이에요. 디자인도 집 분위기와 너무 잘 어울립니다.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "t-3",
    name: "박준호",
    role: "상업 빌딩 관리소장",
    text: "통행량이 많은 건물의 입구라 잔고장이 걱정이었는데, 설치한 지 반년이 넘도록 고장 없이 잘 사용 중입니다. A/S 대응도 매우 신속해서 든든합니다.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];

const productCategories = [
  {
    id: "high-speed",
    title: "고속자동문 (K-Series)",
    description: "산업 현장의 효율을 극대화하는 프리미엄 스피드 도어",
    items: [
      {
        name: "K-1 (기본형)",
        description: "최고의 밀폐력과 개폐 속도를 자랑하는 실내외 공용 모델입니다.",
        features: ["초고속 개폐 시스템", "에너지 손실 최소화", "먼지 및 벌레 차단"],
        image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/006b8d9d-72b2-4bb6-8acc-c651455985b3_800w.png"
      },
      {
        name: "K-2 (내풍압형)",
        description: "강한 바람에도 견딜 수 있는 윈드바 시스템이 적용된 고강도 모델입니다.",
        features: ["강풍 지역 최적화", "높은 내구성 프레임", "안정적인 구동 메커니즘"],
        image: "https://images.unsplash.com/photo-1516550130560-eb995000e3d6?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "K-3 (충돌복구형)",
        description: "차량 충돌 시 시트가 이탈했다가 자동으로 복귀하는 스마트 모델입니다.",
        features: ["유지보수 비용 제로화", "지퍼타입 밀폐 구조", "지능형 충돌 감지"],
        image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc09d1a1-3bd4-412b-81b3-bfec67c56268_800w.png"
      }
    ]
  },
  {
    id: "industrial",
    title: "산업용 전문 도어",
    description: "대형 물류 창고 및 공장 입구에 최적화된 안전 중심 도어",
    items: [
      {
        name: "오버헤드 도어",
        description: "단열성이 뛰어난 우레탄 패널로 제작된 견고한 수직 개폐 도어입니다.",
        features: ["뛰어난 단열 및 방음", "협소 공간 활용 극대화", "다중 안전 장치 탑재"],
        image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12169933-e42c-46a2-be5c-b54ab938eabb_800w.png"
      },
      {
        name: "도크 셀터 & 레벨러",
        description: "차량 적재함과 입구를 밀착시켜 냉각 손실을 차단하는 토탈 솔루션입니다.",
        features: ["콜드 체인 완벽 유지", "차량별 맞춤 밀착", "작업 효율성 향상"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "special",
    title: "특수 및 자동문",
    description: "상업 공간과 주거 공간의 품격을 높이는 인텔리전트 도어",
    items: [
      {
        name: "강화유리 자동문",
        description: "투명한 개방감과 세련된 디자인의 상업 시설용 프리미엄 자동문입니다.",
        features: ["저소음 정밀 모터", "고강도 안전 강화유리", "세련된 프레임 디자인"],
        image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91dadff6-dc1f-4e66-b10d-7969fe608c8e_800w.png"
      }
    ]
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // Navigation State
  const [currentView, setCurrentView] = useState<'home' | 'gallery' | 'products' | 'quote' | 'inquiries' | 'reviews'>('home');

  const [productsData, setProductsData] = useState(productCategories);
  const [editingProductItem, setEditingProductItem] = useState<{catId: string, itemIdx: number} | null>(null);
  const [editingCategory, setEditingCategory] = useState<{catId: string} | null>(null);

  // Multi-image upload state
  const [tempImages, setTempImages] = useState<string[]>([]);
  
  // Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    title: '',
    name: '',
    phone: '',
    email: '',
    location: '',
    types: [] as string[],
    content: '',
    privacyAgreed: false
  });
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [isQuoteSuccess, setIsQuoteSuccess] = useState(false);
  const [quoteInquiries, setQuoteInquiries] = useState<any[]>(() => {
    const saved = localStorage.getItem('sun_quote_inquiries');
    return saved ? JSON.parse(saved) : [];
  });

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [galleryPage, setGalleryPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Gallery Pagination Logic
  const itemsPerPage = 5;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  const currentItems = portfolioItems.slice((galleryPage - 1) * itemsPerPage, galleryPage * itemsPerPage);

  const handleViewGallery = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setGalleryPage(1);
    setCurrentView('gallery');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleViewProducts = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  
  // Edit State
  const [editingProject, setEditingProject] = useState<PortfolioItem | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);

  // Translate labels
  const uiLabels = {
    adminMode: "관리자 모드",
    adminLogin: "관리자 로그인",
    password: "비밀번호",
    login: "로그인",
    cancel: "취소",
    save: "저장",
    delete: "삭제",
    edit: "수정",
    add: "추가",
    title: "제목",
    description: "설명",
    image: "이미지",
    success: "성공",
    error: "오류",
    detail: "상세보기",
    loading: "처리 중...",
  };

  // Review Form State
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    role: '일반 고객',
    text: '',
    rating: 5
  });
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  
  // Admin Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newImage, setNewImage] = useState('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Initial Load
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (response.ok) {
          const data = await response.json();
          
          if (data.portfolio && Array.isArray(data.portfolio) && data.portfolio.length > 0) {
            setPortfolioItems(data.portfolio);
          } else {
            setPortfolioItems(initialPortfolio);
          }
          
          if (data.testimonials && Array.isArray(data.testimonials) && data.testimonials.length > 0) {
            setTestimonialsList(data.testimonials);
          } else {
            setTestimonialsList(initialTestimonials);
          }
          
          if (data.products && Array.isArray(data.products) && data.products.length > 0) {
            setProductsData(data.products);
          } else {
            setProductsData(productCategories);
          }
          
          if (data.inquiries && Array.isArray(data.inquiries)) {
            setQuoteInquiries(data.inquiries);
          }
        }
      } catch (e) {
        console.error("Failed to fetch data from API", e);
        // Fallback to localStorage if API fails
        try {
          const savedPortfolio = localStorage.getItem('portfolioItems');
          if (savedPortfolio) setPortfolioItems(JSON.parse(savedPortfolio));
          else setPortfolioItems(initialPortfolio);
          
          const savedTestimonials = localStorage.getItem('testimonialsList');
          if (savedTestimonials) setTestimonialsList(JSON.parse(savedTestimonials));
          else setTestimonialsList(initialTestimonials);

          const savedProducts = localStorage.getItem('productsData');
          if (savedProducts) setProductsData(JSON.parse(savedProducts));
          else setProductsData(productCategories);

          const savedInquiries = localStorage.getItem('sun_quote_inquiries');
          if (savedInquiries) setQuoteInquiries(JSON.parse(savedInquiries));
        } catch (storageError) {
          console.error("LocalStorage fallback error", storageError);
          setPortfolioItems(initialPortfolio);
          setTestimonialsList(initialReviews);
          setProductsData(productCategories);
        }
      }
      setIsDataLoaded(true);
    };

    fetchData();

    const savedAdmin = localStorage.getItem('isAdmin');
    if (savedAdmin === 'true') {
      setIsAdmin(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync to API and LocalStorage
  const syncData = async (type: string, data: any) => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, data })
      });
      
      if (!response.ok) {
        throw new Error('데이터 저장에 실패했습니다.');
      }

      localStorage.setItem(type === 'portfolio' ? 'portfolioItems' : 
                           type === 'testimonials' ? 'testimonialsList' :
                           type === 'products' ? 'productsData' : 'sun_quote_inquiries', 
                           JSON.stringify(data));
      return true;
    } catch (e) {
      console.error(`Failed to sync ${type}`, e);
      alert(`${type} 저장 중 아러가 발생했습니다: ${e instanceof Error ? e.message : String(e)}`);
      return false;
    }
  };

  const handleAdminToggle = () => {
    if (isAdmin) {
      setIsAdmin(false);
      localStorage.removeItem('isAdmin');
    } else {
      setIsLoginModalOpen(true);
      setLoginPassword('');
      setLoginError('');
    }
  };

  const handleLoginSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoginError('');
    
    if (!loginPassword) {
      setLoginError('비밀번호를 입력해주세요.');
      return;
    }

    setIsLoggingIn(true);
    
    // Simulate a brief network delay for professional feel
    await new Promise(resolve => setTimeout(resolve, 800));

    if (loginPassword === "0818") {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      setIsLoginModalOpen(false);
      setLoginPassword('');
      setLoginError('');
    } else {
      setLoginError('비밀번호가 올바르지 않습니다.');
    }
    setIsLoggingIn(false);
  };

  const handleAddProject = async () => {
    if (!newTitle) {
      alert("제목을 입력해주세요.");
      return;
    }

    const allImages = tempImages.length > 0 ? tempImages : (newImage ? [newImage] : []);
    const mainImage = allImages.length > 0 ? allImages[0] : "";

    const newItem: PortfolioItem = {
      id: `project-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: newTitle,
      desc: newDesc || "시공 상세 설명이 등록되지 않았습니다.",
      image: mainImage,
      images: allImages
    };

    const updated = [newItem, ...portfolioItems];
    setPortfolioItems(updated);
    await syncData('portfolio', updated);
    
    // Reset form
    setNewTitle('');
    setNewDesc('');
    setNewImage('');
    setTempImages([]);
    alert("새로운 시공 사례가 성공적으로 등록되었습니다.");
  };

  const handleDeleteProject = async (id: string) => {
    if (!isAdmin || !id) return;
    
    if (window.confirm("이 시공 사례를 완전히 삭제하시겠습니까? (복구 불가능)")) {
      const updated = portfolioItems.filter(item => String(item.id) !== String(id));
      setPortfolioItems(updated);
      await syncData('portfolio', updated);
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!isAdmin || !id) return;
    
    if (window.confirm("이 후기를 영구적으로 삭제하시겠습니까?")) {
      const updated = testimonialsList.filter(t => String(t.id) !== String(id));
      setTestimonialsList(updated);
      await syncData('testimonials', updated);
    }
  };

  const handleSaveProject = async () => {
    if (!editingProject || !editingProject.id) return;
    
    const projectToSave = { ...editingProject };
    // Ensure 'image' is always the first element of 'images' if available
    if (projectToSave.images && projectToSave.images.length > 0) {
      projectToSave.image = projectToSave.images[0];
    } else if (!projectToSave.image && projectToSave.images && projectToSave.images.length === 0) {
      projectToSave.image = "";
    }
    
    const updated = portfolioItems.map(item => 
      item.id === projectToSave.id ? projectToSave : item
    );
    setPortfolioItems(updated);
    await syncData('portfolio', updated);
    setEditingProject(null);
    alert("시공 사례가 성공적으로 수정되었습니다.");
  };

  const handleUpdateProductItem = async (catId: string, itemIdx: number, updates: any) => {
    const updated = productsData.map(cat => {
      if (cat.id === catId) {
        const newItems = [...cat.items];
        newItems[itemIdx] = { ...newItems[itemIdx], ...updates };
        return { ...cat, items: newItems };
      }
      return cat;
    });
    setProductsData(updated);
    await syncData('products', updated);
  };

  const handleUpdateCategory = async (catId: string, updates: any) => {
    const updated = productsData.map(cat => {
      if (cat.id === catId) {
        return { ...cat, ...updates };
      }
      return cat;
    });
    setProductsData(updated);
    await syncData('products', updated);
  };

  const handleDeleteProductItem = async (catId: string, itemIdx: number) => {
    if (window.confirm("이 제품을 삭제하시겠습니까?")) {
      const updated = productsData.map(cat => {
        if (cat.id === catId) {
          const newItems = cat.items.filter((_, i) => i !== itemIdx);
          return { ...cat, items: newItems };
        }
        return cat;
      });
      setProductsData(updated);
      await syncData('products', updated);
    }
  };

  const handleDeleteCategory = async (catId: string) => {
    if (window.confirm("이 메뉴(카테고리)와 포함된 모든 제품을 삭제하시겠습니까?")) {
      const updated = productsData.filter(cat => cat.id !== catId);
      setProductsData(updated);
      await syncData('products', updated);
      if (editingCategory?.catId === catId) {
        setEditingCategory(null);
      }
    }
  };

  const handleAddCategory = async () => {
    const newId = `cat-${Date.now()}`;
    const newCategory = {
      id: newId,
      title: "새 메뉴 카테고리",
      description: "카테고리 설명을 입력해주세요.",
      items: []
    };
    const updated = [...productsData, newCategory];
    setProductsData(updated);
    await syncData('products', updated);
    setEditingCategory({ catId: newId });
  };

  const handleAddProductItem = async (catId: string) => {
    const newItem = {
      name: "새 제품",
      description: "제품 설명을 입력해주세요.",
      features: ["기능 1", "기능 2"],
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/006b8d9d-72b2-4bb6-8acc-c651455985b3_800w.png"
    };
    const updated = productsData.map(cat => {
      if (cat.id === catId) {
        return { ...cat, items: [...cat.items, newItem] };
      }
      return cat;
    });
    setProductsData(updated);
    await syncData('products', updated);
  };

  const handleSaveTestimonial = async () => {
    if (!editingTestimonial || !editingTestimonial.id) return;
    
    const testimonialToSave = { ...editingTestimonial };
    const updated = testimonialsList.map(t => 
      t.id === testimonialToSave.id ? testimonialToSave : t
    );
    setTestimonialsList(updated);
    await syncData('testimonials', updated);
    setEditingTestimonial(null);
    alert("후기가 성공적으로 수정되었습니다.");
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.text) {
      alert("성함과 후기 내용은 필수 입력 항목입니다.");
      return;
    }

    setIsSubmittingReview(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newReview: Testimonial = {
      id: `review-${Date.now()}`,
      name: reviewForm.name,
      role: reviewForm.role,
      text: `“${reviewForm.text}”`,
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=100", // Generic avatar
      rating: reviewForm.rating
    };

    const updated = [newReview, ...testimonialsList];
    setTestimonialsList(updated);
    await syncData('testimonials', updated);

    setIsReviewModalOpen(false);
    setIsSubmittingReview(false);
    setReviewForm({
      name: '',
      role: '일반 고객',
      text: '',
      rating: 5
    });
    alert("소중한 후기가 성공적으로 등록되었습니다. 감사합니다!");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImgs: string[] = [];
      const fileList = Array.from(files);
      
      let processed = 0;
      fileList.forEach((file: File) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          newImgs.push(event.target?.result as string);
          processed++;
          if (processed === fileList.length) {
            setTempImages(prev => [...prev, ...newImgs]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.name || !quoteForm.phone) {
      alert("성함과 연락처는 필수 입력 항목입니다.");
      return;
    }

    if (!quoteForm.privacyAgreed) {
      alert("개인정보수집 및 이용 안내에 동의해주세요.");
      return;
    }

    setIsSubmittingQuote(true);
    
    // Simulate real-time submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newInquiry = {
      ...quoteForm,
      id: Date.now(),
      date: new Date().toLocaleString(),
      status: 'new'
    };

    const updatedInquiries = [newInquiry, ...quoteInquiries];
    setQuoteInquiries(updatedInquiries);
    await syncData('inquiries', updatedInquiries);

    console.log("Quote Submission Recorded:", newInquiry);
    
    setIsSubmittingQuote(false);
    setIsQuoteSuccess(true);
    
    // Reset form after success
    setQuoteForm({
      title: '',
      name: '',
      phone: '',
      email: '',
      location: '',
      types: [],
      content: '',
      privacyAgreed: false
    });

    setTimeout(() => setIsQuoteSuccess(false), 5000);
  };

  const handleTypeToggle = (type: string) => {
    setQuoteForm(prev => ({
      ...prev,
      types: prev.types.includes(type) 
        ? prev.types.filter(t => t !== type)
        : [...prev.types, type]
    }));
  };

  const navItems = [
    { name: '제품소개', href: '#products' },
    { name: '작업과정', href: '#process' },
    { name: '시공 갤러리', href: '#portfolio' },
    { name: '고객후기', href: '#testimonials' },
    { name: '견적문의', href: '#contact' }
  ];

  return (
    <div className="relative font-sans text-neutral-200 bg-[#050505] selection:bg-gold selection:text-black">
      {/* Scroll Progress Bar */}
      {currentView === 'home' && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-[0%]"
          style={{ scaleX }}
        />
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-xl py-4 border-white/10 shadow-lg' : 'bg-transparent py-7 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-gold flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-gold font-bold text-xs">T</span>
            </div>
            <span className="uppercase text-sm font-bold text-white tracking-[0.3em] group-hover:text-gold transition-colors">
              태양강화자동문
            </span>
            {isAdmin && (
              <span className="bg-gold/20 text-gold text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-sm ml-2 border border-gold/30">
                관리자 모드
              </span>
            )}
          </a>

          <div className="hidden md:flex items-center space-x-12 text-xs font-medium text-neutral-400 uppercase tracking-[0.2em]">
            <a href="#" onClick={() => setCurrentView('home')} className={`hover:text-gold transition-colors ${currentView === 'home' ? 'text-gold' : ''}`}>홈</a>
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={['시공 갤러리', '제품소개', '견적문의'].includes(item.name) ? undefined : item.href} 
                onClick={(e) => {
                  if (item.name === '시공 갤러리') {
                    handleViewGallery(e);
                  } else if (item.name === '제품소개') {
                    handleViewProducts(e);
                  } else if (item.name === '견적문의') {
                    e.preventDefault();
                    setCurrentView('quote');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (item.name === '고객후기') {
                    e.preventDefault();
                    setCurrentView('reviews');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (currentView !== 'home') {
                    setCurrentView('home');
                  }
                }}
                className={`hover:text-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all hover:after:w-full ${
                  (item.name === '시공 갤러리' && currentView === 'gallery') || 
                  (item.name === '제품소개' && currentView === 'products') ||
                  (item.name === '고객후기' && currentView === 'reviews') ? 'text-gold after:w-full' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            {isAdmin && (
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentView('inquiries');
                }}
                className={`hover:text-gold transition-colors relative flex items-center gap-2 ${currentView === 'inquiries' ? 'text-gold' : 'text-gold/60'}`}
              >
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                문의 내역
              </a>
            )}
            <a href="tel:02-2663-6153" className="text-xs font-bold text-neutral-300 hover:text-white transition-colors">
              02-2663-6153
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                setCurrentView('quote');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.2em] bg-gold text-black px-8 py-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-gold/20"
            >
              무료 견적 문의
            </a>
          </div>

          <button className="md:hidden text-neutral-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-[#0a0a0a] border-b border-white/10"
        >
          <div className="px-6 py-8 flex flex-col space-y-6">
            <a href="#" className="text-sm font-medium text-neutral-400 hover:text-gold" onClick={() => { setCurrentView('home'); setIsMenuOpen(false); }}>홈</a>
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={['시공 갤러리', '제품소개', '견적문의'].includes(item.name) ? undefined : item.href} 
                onClick={(e) => {
                  if (item.name === '시공 갤러리') {
                    handleViewGallery(e);
                    setIsMenuOpen(false);
                  } else if (item.name === '제품소개') {
                    handleViewProducts(e);
                    setIsMenuOpen(false);
                  } else if (item.name === '견적문의') {
                    e.preventDefault();
                    setCurrentView('quote');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsMenuOpen(false);
                  } else if (item.name === '고객후기') {
                    e.preventDefault();
                    setCurrentView('reviews');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsMenuOpen(false);
                  } else {
                    if (currentView !== 'home') setCurrentView('home');
                    setIsMenuOpen(false);
                  }
                }}
                className={`text-sm font-medium hover:text-gold ${
                  (item.name === '시공 갤러리' && currentView === 'gallery') || 
                  (item.name === '제품소개' && currentView === 'products') ||
                  (item.name === '고객후기' && currentView === 'reviews') ? 'text-gold' : 'text-neutral-400'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="text-sm font-bold text-gold" 
              onClick={(e) => { 
                e.preventDefault();
                setCurrentView('quote');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false); 
              }}
            >
              무료 견적 문의
            </a>
            {isAdmin && (
              <a 
                href="#" 
                className="text-sm font-bold text-gold flex items-center gap-2" 
                onClick={(e) => { 
                  e.preventDefault();
                  setCurrentView('inquiries');
                  setIsMenuOpen(false); 
                }}
              >
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                관리자: 문의 내역 확인
              </a>
            )}
            <button 
              onClick={() => {
                handleAdminToggle();
                setIsMenuOpen(false);
              }} 
              className="text-left text-xs font-bold text-neutral-500 uppercase tracking-widest border-t border-white/5 pt-6"
            >
              {isAdmin ? '관리자 로그아웃' : '관리자 로그인'}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsReviewModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 p-10 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsReviewModalOpen(false)}
                className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-8">
                <Star className="text-gold" size={24} fill="currentColor" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">시공 후기 남기기</h2>
              <p className="text-neutral-500 text-sm mb-8 font-light italic">태양강화자동문에 대한 소중한 의견을 들려주세요.</p>
              
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">성함</label>
                    <input 
                      type="text" 
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="성함을 입력하세요"
                      className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">구분</label>
                    <input 
                      type="text" 
                      value={reviewForm.role}
                      onChange={(e) => setReviewForm(prev => ({ ...prev, role: e.target.value }))}
                      placeholder="예: 아파트 주민, 매장 사장님 등"
                      className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">만족도 별점</label>
                  <div className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        key={star}
                        type="button"
                        onClick={() => setReviewForm(prev => ({ ...prev, rating: star }))}
                        className="transition-transform active:scale-90"
                      >
                        <Star 
                          size={28} 
                          fill={star <= reviewForm.rating ? "#c8a97e" : "transparent"} 
                          stroke={star <= reviewForm.rating ? "none" : "#333"} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">후기 상세 내용</label>
                  <textarea 
                    rows={4}
                    value={reviewForm.text}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, text: e.target.value }))}
                    placeholder="시공 과정은 어떠셨나요? 솔직한 의견 부탁드립니다."
                    className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmittingReview}
                  className="w-full py-5 bg-gold text-black font-bold uppercase text-[11px] tracking-[0.3em] rounded-xl hover:bg-white disabled:bg-neutral-800 disabled:text-neutral-500 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmittingReview ? "등록 중..." : "후기 등록하기"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Edit Project Modal */}
      <AnimatePresence>
        {editingProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-6 text-neutral-200">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              onClick={() => setEditingProject(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">게시물 수정</h2>
                  <p className="text-neutral-500 text-xs mt-1 font-light">프로젝트의 정보와 이미지를 업데이트합니다.</p>
                </div>
                <button onClick={() => setEditingProject(null)} className="p-2 bg-white/5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-all">
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">프로젝트 제목</label>
                    <input 
                      type="text" 
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                      className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all placeholder:text-neutral-700"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">시공 상세 설명</label>
                    <textarea 
                      rows={7}
                      value={editingProject.desc}
                      onChange={(e) => setEditingProject({...editingProject, desc: e.target.value})}
                      className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-gold/50 focus:bg-white/[0.05] resize-none transition-all placeholder:text-neutral-700"
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">이미지 갤러리 관리</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(editingProject.images || [editingProject.image]).map((src, idx) => (
                        <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group border border-white/5 shadow-lg bg-neutral-900">
                          <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button 
                              onClick={() => {
                                const currentImages = editingProject.images || (editingProject.image ? [editingProject.image] : []);
                                const filtered = currentImages.filter((_, i) => i !== idx);
                                setEditingProject({
                                  ...editingProject,
                                  image: filtered.length > 0 ? filtered[0] : "",
                                  images: filtered
                                });
                              }}
                              className="bg-red-600 text-white p-2 rounded-full hover:scale-110 transition-transform shadow-xl"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          {idx === 0 && (
                            <div className="absolute top-2 left-2 bg-gold text-black text-[7px] font-black uppercase px-2 py-0.5 rounded-full shadow-lg">Main</div>
                          )}
                        </div>
                      ))}
                      
                      <label className="aspect-square bg-white/[0.02] border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-gold/30 hover:bg-gold/5 transition-all group">
                        <input 
                          type="file" 
                          multiple 
                          className="hidden" 
                          onChange={(e) => {
                            const files = e.target.files;
                            if (files && files.length > 0) {
                              const newImgs: string[] = [];
                              const fileList = Array.from(files);
                              let processed = 0;
                              fileList.forEach((file: File) => {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  newImgs.push(event.target?.result as string);
                                  processed++;
                                  if (processed === fileList.length) {
                                    const currentImages = editingProject.images || (editingProject.image ? [editingProject.image] : []);
                                    const updatedImages = [...currentImages, ...newImgs];
                                    setEditingProject({
                                      ...editingProject,
                                      image: updatedImages[0] || "",
                                      images: updatedImages
                                    });
                                  }
                                };
                                reader.readAsDataURL(file);
                              });
                            }
                          }} 
                          accept="image/*" 
                        />
                        <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center mb-2 group-hover:bg-gold/20 transition-all">
                          <Plus size={16} className="text-neutral-500 group-hover:text-gold" />
                        </div>
                        <span className="text-[9px] font-bold text-neutral-600 group-hover:text-gold transition-all">사진 추가</span>
                      </label>
                    </div>
                    <p className="text-[9px] text-neutral-600 mt-4 leading-relaxed font-light">
                      * 첫 번째 이미지가 시공 리스트와 홈 화면의 대표 썸네일로 사용됩니다.<br/>
                      * 사진을 드래그하여 순서를 변경하는 기능은 추후 업데이트 예정입니다.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-white/5">
                    <button 
                      onClick={() => setEditingProject(null)}
                      className="flex-1 py-5 bg-white/5 text-neutral-400 font-bold rounded-2xl hover:bg-white/10 transition-all uppercase tracking-[0.2em] text-[10px]"
                    >
                      취소하기
                    </button>
                    <button 
                      onClick={handleSaveProject}
                      className="flex-1 py-5 bg-gold text-black font-black rounded-2xl hover:bg-white transition-all uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-gold/10 hover:-translate-y-0.5"
                    >
                      저장 완료
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Edit Testimonial Modal */}
      <AnimatePresence>
        {editingTestimonial && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setEditingTestimonial(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 p-10 rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-white mb-8">후기 수정</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase">작성자</label>
                    <input 
                      type="text" 
                      value={editingTestimonial.name}
                      onChange={(e) => setEditingTestimonial({...editingTestimonial, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase">역할/구분</label>
                    <input 
                      type="text" 
                      value={editingTestimonial.role}
                      onChange={(e) => setEditingTestimonial({...editingTestimonial, role: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-gold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">내용</label>
                  <textarea 
                    rows={4}
                    value={editingTestimonial.text.replace(/^[“"]|[”"]$/g, '')}
                    onChange={(e) => setEditingTestimonial({...editingTestimonial, text: `“${e.target.value}”`})}
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-gold resize-none"
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => setEditingTestimonial(null)}
                    className="flex-1 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10"
                  >
                    취소
                  </button>
                  <button 
                    onClick={handleSaveTestimonial}
                    className="flex-1 py-4 bg-gold text-black font-bold rounded-xl hover:bg-white transition-colors"
                  >
                    저장하기
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsLoginModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 p-10 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
            <button 
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-8">
              <Lock className="text-gold" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">관리자 로그인</h2>
            <p className="text-neutral-500 text-sm mb-8 font-light">관리 시스템 접속을 위해 비밀번호를 입력하세요.</p>
            
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">비밀번호</label>
                  {loginError && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[10px] text-red-500 font-bold"
                    >
                      {loginError}
                    </motion.span>
                  )}
                </div>
                    <input 
                      autoFocus
                      type="password" 
                      value={loginPassword}
                      onChange={(e) => {
                        setLoginPassword(e.target.value);
                        if (loginError) setLoginError('');
                      }}
                      placeholder="비밀번호"
                      className={`w-full bg-white/5 border ${loginError ? 'border-red-500/50' : 'border-white/10'} text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700`}
                      disabled={isLoggingIn}
                    />
              </div>
                  <button 
                    type="submit"
                    disabled={isLoggingIn}
                    className="w-full py-4 bg-gold text-black font-bold uppercase text-[11px] tracking-[0.3em] rounded-xl hover:bg-white disabled:bg-neutral-800 disabled:text-neutral-500 transition-all shadow-xl shadow-gold/10 flex items-center justify-center gap-2"
                  >
                    {isLoggingIn ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        확인 중...
                      </>
                    ) : (
                      '접속하기'
                    )}
                  </button>
                  <p className="text-[10px] text-neutral-600 text-center uppercase tracking-widest pt-2">
                    초기 비밀번호: 0818
                  </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <motion.img 
            initial={{ scale: 1.1, filter: 'blur(4px)' }}
            animate={{ scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600" 
            alt="Premium Automatic Glass Door Interior" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/20 to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 mb-10 rounded-full backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="uppercase text-[10px] font-bold text-neutral-300 tracking-[0.3em]">
              프리미엄 자동문 및 강화유리 전문 솔루션
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide mt-8"
          >
            정밀한 엔지니어링과 프리미엄 디자인의 결합. <br className="hidden md:block" />
            공간의 첫인상을 완성하는 최첨단 자동문 시스템을 경험하세요.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button 
              onClick={() => {
                setCurrentView('quote');
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className="w-full sm:w-auto px-10 py-5 bg-gold text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 group"
            >
              <span>상담 문의하기</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleViewProducts}
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all duration-500"
            >
              제품 라인업 보기
            </button>
            <button 
              onClick={() => handleViewGallery()}
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white/5 transition-all duration-300"
            >
              시공 사례 보기
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] rotate-90 mb-4 text-white">스크롤</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
        </motion.div>
      </header>



      {/* Features Grid */}
      <section className="py-32 lg:py-48 bg-[#050505] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-sm font-bold text-gold uppercase tracking-[0.4em] mb-6 inline-block border-b border-gold/30 pb-1">태양강화자동문의 약속</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">타협 없는 품질의 기준</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0a0a0a] p-12 hover:bg-neutral-900/40 transition-all duration-500 group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{feature.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">{feature.description}</p>
                <div className="mt-auto pt-8 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-widest">상세보기</span>
                  <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section id="process" className="py-32 lg:py-48 bg-[#0a0a0a] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
            <div>
              <h2 className="text-sm font-bold text-gold uppercase tracking-[0.4em] mb-6">시공 프로세스</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-none">
                완벽한 마무리를 위한 <br /> 체계적인 단계
              </h3>
            </div>
              <p className="text-neutral-400 font-normal max-w-lg leading-relaxed">
                정밀 실측부터 섬세한 마감까지, 태양강화자동문만의 전문 시공 프로세스는 작은 오차도 허용하지 않습니다.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processes.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-5xl font-light text-gold/30 mb-8 font-mono group-hover:text-gold transition-colors duration-500">{p.step}</div>
                <div className="h-[1px] w-full bg-white/10 mb-8" />
                <h4 className="text-lg font-bold text-white mb-4">{p.title}</h4>
                <p className="text-sm text-neutral-400 font-normal leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Portfolio Grid */}
      <section id="portfolio" className="py-32 lg:py-48 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 text-center md:text-left">
            <div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">시공 갤러리</h3>
              <p className="text-neutral-500 text-xs mt-4 uppercase tracking-[0.2em] font-bold">최고의 전문 시공 현장</p>
            </div>
            
            <div className="mt-8 md:mt-0 flex items-center gap-4">
              <button 
                onClick={handleAdminToggle}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                  isAdmin 
                    ? 'bg-red-500/10 border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white' 
                    : 'bg-white/5 border-white/10 text-neutral-400 hover:text-gold hover:border-gold/30'
                }`}
              >
                {isAdmin ? (
                  <>로그아웃</>
                ) : (
                  <>관리자 로그인</>
                )}
              </button>

              <button 
                onClick={() => {
                  if (!isAdmin) {
                    handleAdminToggle();
                  } else {
                    // Scroll to the form or just let it stay toggled
                    const formElement = document.getElementById('admin-form');
                    formElement?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-3 px-8 py-3 bg-gold text-black rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-gold/20"
              >
                <Plus size={16} />
                글쓰기
              </button>
            </div>
          </div>

          {/* Admin panel */}
          <AnimatePresence>
            {isAdmin && (
              <motion.div 
                id="admin-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-24 bg-[#050505] border border-gold/20 p-8 md:p-12 rounded-3xl relative overflow-hidden"
              >
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[10px] font-bold text-gold/30 uppercase tracking-widest">Admin Mode</span>
              </div>

              <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Plus className="text-gold" />
                새로운 시공 사례 등록
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">시공 현장 명칭</label>
                    <input 
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      type="text" 
                      placeholder="예: 불광동 어린이집" 
                      className="w-full bg-white/5 border border-white/10 text-white text-sm px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">작업 내용 요약</label>
                    <input 
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      type="text" 
                      placeholder="예: 자동문 교체 및 센서 점검" 
                      className="w-full bg-white/5 border border-white/10 text-white text-sm px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700" 
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">현장 사진</label>
                    <div className="relative group h-[132px]">
                      <input type="file" className="hidden" id="admin-file-upload" onChange={handleImageUpload} accept="image/*" />
                      <label 
                        htmlFor="admin-file-upload" 
                        className="flex flex-col items-center justify-center w-full h-full bg-white/5 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer group-hover:border-gold/30 group-hover:bg-gold/5 transition-all"
                      >
                        {newImage ? (
                          <img src={newImage} alt="Preview" className="w-full h-full object-cover rounded-2xl" />
                        ) : (
                          <>
                            <Upload className="text-neutral-600 mb-2 group-hover:text-gold transition-colors" size={24} />
                            <span className="text-xs text-neutral-500 group-hover:text-neutral-300">사진 선택하기</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                  <button 
                    onClick={handleAddProject}
                    className="w-full py-4 bg-gold text-black font-black uppercase text-[11px] tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-xl shadow-gold/10"
                  >
                    포트폴리오 등록하기
                  </button>
                  <p className="text-[9px] text-neutral-600 text-center leading-relaxed">
                    💡 현재 데이터는 브라우저(LocalStorage)에 저장됩니다. <br />
                    모든 기기에서 동기화하려면 Firebase 연동을 완료해주세요.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {portfolioItems.length === 0 ? (
                <div className="col-span-full py-20 text-center border border-white/5 rounded-3xl bg-[#0a0a0a]/50">
                  <Layers size={40} className="mx-auto text-neutral-800 mb-4" strokeWidth={1} />
                  <p className="text-neutral-500 text-sm font-light italic">등록된 시공 사례가 없습니다. 관리자 모드에서 등록해주세요.</p>
                </div>
              ) : (
                portfolioItems.slice(0, 6).map((item, i) => (
                  <motion.div 
                    key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-[#050505] shadow-2xl border border-white/5"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    
                    {isAdmin && (
                      <div className="absolute top-4 right-4 z-[60] flex gap-2">
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDeleteProject(item.id);
                          }}
                          className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all cursor-pointer hover:bg-white hover:text-red-600 hover:scale-110 active:scale-95 border-2 border-white/20"
                          title="게시물 삭제"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    )}
                  </div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-lg font-bold text-white mb-2 leading-tight">{item.title}</h4>
                    <p className="text-xs text-neutral-500 font-light line-clamp-1">{item.desc}</p>
                  </div>
                </div>

                <div className="absolute inset-0 border border-white/0 group-hover:border-gold/20 transition-all rounded-2xl pointer-events-none" />
              </motion.div>
            ))
          )}
          </AnimatePresence>
        </div>

          <div className="mt-20 flex justify-center">
            <button 
              onClick={() => handleViewGallery()}
              className="group flex items-center gap-4 px-12 py-5 border border-white/10 text-neutral-400 hover:text-gold hover:border-gold/30 transition-all rounded-full"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">전체 시공 사례 보기</span>
              <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>
        </div>
      </section>



          </motion.div>
        ) : currentView === 'quote' ? (
          <motion.div
            key="quote-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen pt-40 pb-32 bg-[#050505]"
          >
            <div className="max-w-4xl mx-auto px-6">
              <div className="mb-20 text-center">
                <button 
                  onClick={() => setCurrentView('home')}
                  className="inline-flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8 hover:-translate-x-1 transition-transform"
                >
                  <ChevronLeft size={14} />
                  돌아가기
                </button>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 uppercase">
                  Quote <span className="text-neutral-700 italic">Inquiry</span>
                </h1>
                <p className="text-gold/80 text-sm md:text-base font-medium tracking-widest uppercase">
                  실시간 견적 및 시공 상담 신청
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#050505]/60 backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl relative"
              >
                <AnimatePresence>
                  {isQuoteSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 z-20 bg-black/90 rounded-3xl flex flex-col items-center justify-center text-center p-8 backdrop-blur-md"
                    >
                    <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-8 border border-gold/30">
                      <ShieldCheck size={40} className="text-gold" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">견적 문의가 접수되었습니다</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8">
                      전문 엔지니어가 직접 확인 후 <br /> 
                      <span className="text-gold font-bold">010-3163-6153</span> 번호로 신속히 연락드리겠습니다.
                    </p>
                    <button 
                      onClick={() => setIsQuoteSuccess(false)}
                      className="px-8 py-3 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
                    >
                      닫기
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

                <form onSubmit={handleQuoteSubmit} className="space-y-10">
                  {/* Privacy Policy Box */}
                  <div className="space-y-4">
                    <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                      <ShieldCheck size={14} className="text-gold/50" />
                      개인정보수집 및 이용 안내 <span className="text-gold">*</span>
                    </label>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-32 overflow-y-auto text-[11px] text-neutral-500 leading-relaxed font-light custom-scrollbar">
                      <p className="mb-2">태양강화자동문은 귀하의 개인정보를 매우 소중하게 생각하며, ‘개인정보보호법’ 등 관련 법규를 준수하고 있습니다.</p>
                      <p className="mb-2">1. 수집하는 개인정보 항목: 성함, 연락처, 이메일, 현장 위치, 문의 내용</p>
                      <p className="mb-2">2. 수집 및 이용 목적: 실시간 견적 문의 상담 및 현장 방문 예약 서비스 제공</p>
                      <p className="mb-2">3. 보유 및 이용 기간: 이용 목적 달성 시까지 (단, 법령에 정해진 경우 해당 기간까지 보관)</p>
                      <p>위 항목 서비스 제공을 위한 최소한의 개인정보이며, 동의를 거부하실 수 있으나 거부 시 서비스 이용이 제한됩니다.</p>
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          className="peer sr-only" 
                          checked={quoteForm.privacyAgreed}
                          onChange={(e) => setQuoteForm(prev => ({ ...prev, privacyAgreed: e.target.checked }))}
                        />
                        <div className="w-5 h-5 border-2 border-white/10 rounded bg-white/5 transition-all peer-checked:bg-gold peer-checked:border-gold flex items-center justify-center">
                          <Check size={12} className="text-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <span className="text-[11px] text-neutral-400 font-medium group-hover:text-white transition-colors">개인 정보를 수집 및 이용하는 것에 동의합니다.</span>
                    </label>
                  </div>

                  <div className="space-y-6">
                    {/* Title */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                        제목 <span className="text-gold">*</span>
                      </label>
                      <input 
                        type="text" 
                        value={quoteForm.title}
                        onChange={(e) => setQuoteForm(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="문의 제목을 입력해주세요" 
                        className="w-full bg-white/5 border border-white/10 text-white text-sm px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700" 
                        required 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                          <User size={14} className="text-gold/50" />
                          성함 / 업체명 <span className="text-gold">*</span>
                        </label>
                        <input 
                          type="text" 
                          value={quoteForm.name}
                          onChange={(e) => setQuoteForm(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="예: 홍길동 또는 태양빌딩" 
                          className="w-full bg-white/5 border border-white/10 text-white text-sm px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700" 
                          required 
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                          <Phone size={14} className="text-gold/50" />
                          연락처 <span className="text-gold">*</span>
                        </label>
                        <input 
                          type="tel" 
                          value={quoteForm.phone}
                          onChange={(e) => setQuoteForm(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="010-0000-0000" 
                          className="w-full bg-white/5 border border-white/10 text-white text-sm px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700" 
                          required 
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                          <MessageCircle size={14} className="text-gold/50" />
                          이메일 주소
                        </label>
                        <input 
                          type="email" 
                          value={quoteForm.email}
                          onChange={(e) => setQuoteForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="example@email.com" 
                          className="w-full bg-white/5 border border-white/10 text-white text-sm px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700" 
                        />
                      </div>

                      {/* Location */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                          <MapPin size={14} className="text-gold/50" />
                          현장 위치
                        </label>
                        <input 
                          type="text" 
                          value={quoteForm.location}
                          onChange={(e) => setQuoteForm(prev => ({ ...prev, location: e.target.value }))}
                          placeholder="예: 서울 서대문구 북가좌동" 
                          className="w-full bg-white/5 border border-white/10 text-white text-sm px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700" 
                        />
                      </div>
                    </div>

                    {/* Question Types */}
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                        <Tag size={14} className="text-gold/50" />
                        문의 유형
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {['자동문 설치', '수리 및 AS', '부품 교체', '도어 교체', '기타 문의'].map(type => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleTypeToggle(type)}
                            className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all duration-300 ${
                              quoteForm.types.includes(type) 
                                ? 'bg-gold border-gold text-black' 
                                : 'bg-white/5 border-white/10 text-neutral-500 hover:border-gold/30 hover:text-white'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                        <FileText size={14} className="text-gold/50" />
                        상세 문의 사양 <span className="text-gold">*</span>
                      </label>
                      <textarea 
                        rows={6} 
                        value={quoteForm.content}
                        onChange={(e) => setQuoteForm(prev => ({ ...prev, content: e.target.value }))}
                        placeholder="현장 상황 및 요청사항을 상세히 기재해주시면 더 정확한 안내가 가능합니다." 
                        className="w-full bg-white/5 border border-white/10 text-white text-base px-6 py-6 rounded-2xl focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700 resize-none font-light leading-relaxed" 
                        required 
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex flex-col items-center pt-6">
                    <button 
                      type="submit"
                      disabled={isSubmittingQuote}
                      className="w-full md:w-auto min-w-[320px] py-7 bg-gold text-black font-black uppercase text-[12px] tracking-[0.4em] rounded-full hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-2xl shadow-gold/20 flex items-center justify-center gap-4 disabled:opacity-50"
                    >
                      {isSubmittingQuote ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          전송 중...
                        </>
                      ) : (
                        <>실시간 견적 상담 신청 <ArrowRight size={20} /></>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <p className="text-xs text-neutral-400 flex items-center gap-2 leading-relaxed">
                      <ShieldCheck size={14} className="text-gold" />
                      태양강화자동문은 투명한 정찰제와 합리적인 견적을 약속합니다.
                    </p>
                    <div className="hidden md:block w-1.5 h-1.5 bg-white/10 rounded-full" />
                    <p className="text-xs text-neutral-400 flex items-center gap-2 leading-relaxed">
                      <Clock size={14} className="text-gold" />
                      접수 시 베테랑 엔지니어가 직접 확인 후 1시간 내로 연락드립니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact Banner */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-16"
              >
                <a href="tel:02-2663-6153" className="flex items-center justify-between bg-gold text-black p-8 rounded-2xl group hover:bg-white transition-all duration-500 max-w-4xl mx-auto">
                   <div className="flex items-center gap-6">
                     <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center">
                        <Phone className="group-hover:scale-110 transition-transform" size={32} />
                     </div>
                     <div className="text-left">
                       <p className="text-xs font-black uppercase tracking-widest opacity-60">Hotline</p>
                       <p className="text-2xl font-bold">지금 바로 전화 상담하기 (02-2663-6153)</p>
                     </div>
                   </div>
                   <ChevronRight size={32} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        ) : currentView === 'quote' ? (
          <motion.div
            key="quote-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-40 pb-32 bg-[#050505]"
          >
            <div className="max-w-4xl mx-auto px-6">
              {/* Back Button */}
              <div className="mb-12">
                <button 
                  onClick={() => setCurrentView('home')}
                  className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.3em] hover:-translate-x-1 transition-transform"
                >
                  <ChevronLeft size={14} />
                  홈으로 돌아가기
                </button>
              </div>

              {/* Title Section */}
              <div className="mb-20">
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
                  Online <span className="text-neutral-800 italic underline decoration-gold underline-offset-8">Inquiry</span>
                </h1>
                <p className="text-neutral-500 font-light leading-relaxed">
                  태양강화자동문의 전문가가 귀하의 공간에 최적화된 견적을 제안해드립니다.<br />
                  양식을 작성해주시면 신속하게 연락드리겠습니다.
                </p>
              </div>

              {/* Form Card */}
              <div className="bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -mr-32 -mt-32" />
                
                {isQuoteSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-gold/20">
                      <Check size={48} className="text-black" strokeWidth={3} />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">상담 신청 완료!</h2>
                    <p className="text-neutral-500 mb-12 font-light text-lg">
                      접수해주신 문의 사항은 담당 전문가가 검토 후 <br className="hidden md:block" /> 24시간 이내에 순차적으로 연락드리겠습니다.
                    </p>
                    <button 
                      onClick={() => {
                        setIsQuoteSuccess(false);
                        setCurrentView('home');
                      }}
                      className="px-12 py-5 bg-gold text-black font-black text-[11px] uppercase tracking-[0.4em] rounded-full hover:bg-white transition-all shadow-xl shadow-gold/10"
                    >
                      메인으로 돌아가기
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                         <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">문의 제목</label>
                         <input 
                           type="text"
                           value={quoteForm.title}
                           onChange={(e) => setQuoteForm({...quoteForm, title: e.target.value})}
                           placeholder="단독주택 자동중문 설치 견적 문의합니다"
                           className="w-full bg-white/[0.03] border border-white/10 text-white px-8 py-6 rounded-2xl focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all placeholder:text-neutral-800 font-medium"
                         />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">성함 / 업체명 <span className="text-gold">*</span></label>
                         <input 
                           type="text"
                           required
                           value={quoteForm.name}
                           onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                           placeholder="홍길동"
                           className="w-full bg-white/[0.03] border border-white/10 text-white px-8 py-6 rounded-2xl focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all placeholder:text-neutral-800 font-medium"
                         />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                         <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">연락처 <span className="text-gold">*</span></label>
                         <input 
                           type="tel"
                           required
                           value={quoteForm.phone}
                           onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                           placeholder="010-1234-5678"
                           className="w-full bg-white/[0.03] border border-white/10 text-white px-8 py-6 rounded-2xl focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all placeholder:text-neutral-800 font-medium"
                         />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">이메일</label>
                         <input 
                           type="email"
                           value={quoteForm.email}
                           onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                           placeholder="example@gmail.com"
                           className="w-full bg-white/[0.03] border border-white/10 text-white px-8 py-6 rounded-2xl focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all placeholder:text-neutral-800 font-medium"
                         />
                      </div>
                    </div>

                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">현장 지역 / 상세 주소</label>
                       <input 
                         type="text"
                         value={quoteForm.location}
                         onChange={(e) => setQuoteForm({...quoteForm, location: e.target.value})}
                         placeholder="예: 서울특별시 강서구 마곡동 OO아파트"
                         className="w-full bg-white/[0.03] border border-white/10 text-white px-8 py-6 rounded-2xl focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all placeholder:text-neutral-800 font-medium"
                       />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">관심 견적 품목 (복수 선택 가능)</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-3xl">
                        {['고속자동문 (K-Series)', '오버헤드 도어', '오토 힐링 도어', '상업용 자동문', '강화유리 도어', '방화 자동문'].map((type) => (
                           <button
                             key={type}
                             type="button"
                             onClick={() => handleTypeToggle(type)}
                             className={`px-4 py-4 rounded-xl text-[10px] font-bold uppercase transition-all border ${
                               quoteForm.types.includes(type)
                                 ? 'bg-gold border-gold text-black shadow-lg shadow-gold/20'
                                 : 'bg-white/5 border-white/10 text-neutral-400 hover:border-gold/30 hover:text-white'
                             }`}
                           >
                             {type}
                           </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest ml-1">상세 문의 사양</label>
                       <textarea 
                         rows={6}
                         value={quoteForm.content}
                         onChange={(e) => setQuoteForm({...quoteForm, content: e.target.value})}
                         placeholder="설치될 공간의 가로/세로 사이즈, 희망 시공 시점 등 구체적인 내용을 적어주시면 더 정확한 견적이 가능합니다."
                         className="w-full bg-white/[0.03] border border-white/10 text-white px-8 py-6 rounded-2xl focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] resize-none transition-all placeholder:text-neutral-800 font-medium font-light"
                       />
                    </div>

                    <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl group cursor-pointer" onClick={() => setQuoteForm({...quoteForm, privacyAgreed: !quoteForm.privacyAgreed})}>
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${quoteForm.privacyAgreed ? 'bg-gold border-gold' : 'border-white/20 group-hover:border-gold/50'}`}>
                         {quoteForm.privacyAgreed && <Check size={14} className="text-black" strokeWidth={4} />}
                      </div>
                      <span className="text-xs text-neutral-400 font-light select-none">
                        상담 신청을 위한 개인정보 수집 및 이용 안내에 동의합니다. (연락처 정보 활용)
                      </span>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmittingQuote}
                      className="w-full py-8 bg-gold text-black font-black text-[13px] uppercase tracking-[0.5em] rounded-2xl hover:bg-white transition-all shadow-2xl shadow-gold/10 hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-4 disabled:bg-neutral-800 disabled:text-neutral-500"
                    >
                      {isSubmittingQuote ? (
                        <>
                          <div className="w-5 h-5 border-3 border-black/20 border-t-black rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          상담 신청하기 <ArrowRight size={20} />
                        </>
                      )}
                    </button>

                    <div className="flex flex-col items-center gap-4 pt-10 text-neutral-600">
                       <p className="text-[10px] font-black uppercase tracking-widest">or direct contact</p>
                       <a href="tel:02-2663-6153" className="text-2xl font-black text-white hover:text-gold transition-colors tracking-tighter">02-2663-6153</a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        ) : currentView === 'products' ? (
          <motion.div
            key="products-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen pt-40 pb-32 bg-[#050505]"
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Header */}
              <div className="mb-24 text-center">
                <button 
                  onClick={() => setCurrentView('home')}
                  className="inline-flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8 hover:-translate-x-1 transition-transform"
                >
                  <ChevronLeft size={14} />
                  돌아가기
                </button>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 uppercase">
                  Product <span className="text-neutral-700 italic underline decoration-gold underline-offset-8">Information</span>
                </h1>
                {isAdmin && productsData.length > 0 && (
                  <div className="mb-10">
                    <button 
                      onClick={async () => {
                        if (window.confirm("정말로 모든 카테고리와 제품을 삭제하시겠습니까? (초기화됩니다)")) {
                          setProductsData([]);
                          await syncData('products', []);
                          alert("모든 제품 데이터가 삭제되었습니다.");
                        }
                      }}
                      className="px-6 py-3 bg-red-600/10 border border-red-600/20 text-red-500 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
                    >
                      모든 제품 데이터 삭제
                    </button>
                    {productsData.length === 0 && (
                      <button 
                        onClick={async () => {
                          setProductsData(productCategories);
                          await syncData('products', productCategories);
                          alert("기본 샘플 데이터가 복원되었습니다.");
                        }}
                        className="px-6 py-3 bg-gold/10 border border-gold/20 text-gold rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all ml-4"
                      >
                        기본 샘플 복원
                      </button>
                    )}
                  </div>
                )}
                <p className="text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
                  태양강화자동문의 핵심 독자기술이 집약된 산업용/상업용 도어 라인업입니다.<br />
                  현장 조건에 최적화된 맞춤 제작 솔루션을 제안합니다.
                </p>
              </div>

              {/* Categories Grid */}
              <div className="space-y-40">
                {isAdmin && (
                  <div className="flex justify-center mb-20">
                    <button 
                      onClick={handleAddCategory}
                      className="px-10 py-5 bg-gold text-black font-black text-sm uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all shadow-2xl shadow-gold/20 flex items-center gap-3"
                    >
                      <Plus size={20} /> 새 카테고리 추가
                    </button>
                  </div>
                )}
                {productsData.map((category, catIdx) => (
                  <div key={category.id} className="relative">
                    <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-8">
                      <div className="flex-grow">
                        <span className="text-gold font-mono text-sm tracking-widest mb-2 block uppercase">Category {catIdx + 1}</span>
                        {isAdmin && editingCategory?.catId === category.id ? (
                          <div className="space-y-4 mt-4">
                            <input 
                              type="text"
                              value={category.title}
                              onChange={(e) => handleUpdateCategory(category.id, { title: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 text-white text-3xl font-bold p-3 rounded-lg focus:border-gold outline-none"
                            />
                            <input 
                              type="text"
                              value={category.description}
                              onChange={(e) => handleUpdateCategory(category.id, { description: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 text-neutral-400 text-sm p-3 rounded-lg focus:border-gold outline-none"
                            />
                            <div className="flex gap-2">
                              <button 
                                onClick={() => {
                                  setEditingCategory(null);
                                  alert("카테고리 정보가 수정되었습니다.");
                                }}
                                className="px-6 py-3 bg-gold text-black rounded-lg text-xs font-bold uppercase tracking-widest"
                              >
                                저장 완료
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-4">
                              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{category.title}</h2>
                              {isAdmin && (
                                <div className="flex items-center gap-3 ml-4">
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setEditingCategory({ catId: category.id });
                                    }} 
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-neutral-400 hover:text-gold hover:bg-gold/10 transition-all border border-white/10 z-10" 
                                    title="카테고리 수정"
                                  >
                                    <Edit size={18} />
                                  </button>
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      handleDeleteCategory(category.id);
                                    }} 
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-red-500/10 transition-all border border-white/10 z-10" 
                                    title="카테고리 삭제"
                                  >
                                    <Trash2 size={18} />
                                  </button>
                                </div>
                              )}
                            </div>
                            <p className="text-neutral-500 text-sm mt-3 font-light">{category.description}</p>
                          </>
                        )}
                      </div>
                      {isAdmin && (
                        <button 
                          onClick={() => handleAddProductItem(category.id)}
                          className="px-6 py-3 bg-white/5 border border-white/10 text-gold text-xs font-bold rounded-full hover:bg-gold hover:text-black transition-all flex items-center gap-2"
                        >
                          <Plus size={14} /> 제품 추가
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.items.map((product, pIdx) => (
                        <motion.div 
                          key={`product-${category.id}-${pIdx}`}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: pIdx * 0.1 }}
                          className={`group bg-[#0a0a0a] border rounded-3xl overflow-hidden transition-all duration-500 flex flex-col relative ${
                            isAdmin && editingProductItem?.catId === category.id && editingProductItem?.itemIdx === pIdx 
                            ? 'border-gold ring-2 ring-gold/20' 
                            : 'border-white/5 hover:border-gold/30'
                          }`}
                        >
                          {isAdmin && (
                            <div className="absolute top-4 right-4 z-10 flex gap-2">
                               <button 
                                onClick={() => setEditingProductItem({ catId: category.id, itemIdx: pIdx })}
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                  editingProductItem?.catId === category.id && editingProductItem?.itemIdx === pIdx
                                  ? 'bg-gold text-black'
                                  : 'bg-black/80 backdrop-blur-sm border border-white/10 text-white hover:text-gold'
                                }`}
                                title="수정"
                               >
                                 <Edit size={14} />
                               </button>
                               <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  handleDeleteProductItem(category.id, pIdx);
                                }}
                                className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all z-[60] group/del border-2 border-white/20"
                                title="제품 삭제"
                               >
                                 <Trash2 size={16} className="group-hover/del:scale-110 transition-transform" />
                               </button>
                            </div>
                          )}
                          
                            <div className="aspect-[4/3] overflow-hidden relative bg-neutral-900 flex items-center justify-center">
                              {product.image ? (
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" 
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/006b8d9d-72b2-4bb6-8acc-c651455985b3_800w.png";
                                  }}
                                />
                              ) : (
                                <div className="text-neutral-700 flex flex-col items-center gap-2">
                                  <ImageIcon size={48} />
                                  <span className="text-[10px] font-bold uppercase tracking-widest">No Image</span>
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                              <div className="absolute top-6 left-6">
                                 <div className="w-10 h-10 bg-gold/10 backdrop-blur-md rounded-full flex items-center justify-center border border-gold/20 text-gold font-bold text-xs">
                                    {pIdx + 1}
                                 </div>
                              </div>
                            </div>
                            
                            <div className="p-8 flex-grow flex flex-col">
                              {isAdmin && editingProductItem?.catId === category.id && editingProductItem?.itemIdx === pIdx ? (
                                <div className="space-y-4">
                                  <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gold uppercase tracking-widest">제품명</label>
                                    <input 
                                      type="text"
                                      value={product.name}
                                      onChange={(e) => handleUpdateProductItem(category.id, pIdx, { name: e.target.value })}
                                      className="w-full bg-white/5 border border-white/10 text-white text-lg font-bold p-3 rounded-lg focus:border-gold outline-none"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gold uppercase tracking-widest">제품 설명</label>
                                    <textarea 
                                      value={product.description}
                                      onChange={(e) => handleUpdateProductItem(category.id, pIdx, { description: e.target.value })}
                                      className="w-full bg-white/5 border border-white/10 text-neutral-300 text-[13px] p-3 rounded-lg h-24 outline-none focus:border-gold resize-none"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gold uppercase tracking-widest">제품 이미지 등록</label>
                                    <div className="relative group/upload">
                                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 bg-white/5 rounded-xl cursor-pointer hover:border-gold/50 hover:bg-gold/5 transition-all group-hover/upload:border-gold/30">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                          <Upload size={24} className="text-neutral-500 mb-2 group-hover/upload:text-gold transition-colors" />
                                          <p className="text-[11px] text-neutral-400 font-medium">기기에서 사진 선택</p>
                                          <p className="text-[9px] text-neutral-600 mt-1 uppercase tracking-tighter">PNG, JPG up to 5MB</p>
                                        </div>
                                        <input 
                                          type="file" 
                                          className="hidden" 
                                          accept="image/*"
                                          onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                              const reader = new FileReader();
                                              reader.onloadend = () => {
                                                handleUpdateProductItem(category.id, pIdx, { image: reader.result as string });
                                              };
                                              reader.readAsDataURL(file);
                                            }
                                          }} 
                                        />
                                      </label>
                                      {product.image && (
                                        <div className="absolute top-2 right-2 px-2 py-1 bg-gold text-black text-[9px] font-bold rounded uppercase">
                                          File Selected
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                <div className="space-y-1">
                                  <label className="text-[10px] font-bold text-gold uppercase tracking-widest">주요 특징 (쉼표로 구분)</label>
                                  <input 
                                    type="text"
                                    value={product.features.join(', ')}
                                    onChange={(e) => handleUpdateProductItem(category.id, pIdx, { features: e.target.value.split(',').map(s => s.trim()) })}
                                    className="w-full bg-white/5 border border-white/10 text-neutral-300 text-[11px] p-3 rounded-lg outline-none focus:border-gold"
                                  />
                                </div>
                                <button 
                                  onClick={() => {
                                    setEditingProductItem(null);
                                    alert("제품 내용이 반영되었습니다.");
                                  }}
                                  className="w-full py-4 bg-gold text-black rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-gold/20 hover:bg-white transition-all mt-4"
                                >
                                  편집 완료
                                </button>
                              </div>
                            ) : (
                              <>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{product.name}</h3>
                                <p className="text-neutral-500 text-[13px] leading-relaxed mb-8 flex-grow">{product.description}</p>
                                
                                <div className="space-y-4 mb-10">
                                  <p className="text-[10px] font-black uppercase text-neutral-600 tracking-widest">Key Features</p>
                                  <div className="flex flex-wrap gap-2">
                                    {product.features.map((f, fIdx) => (
                                      <span key={fIdx} className="text-[10px] px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-neutral-400 group-hover:border-gold/20 group-hover:text-neutral-200 transition-colors">
                                        {f}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-40 bg-gold p-12 md:p-20 rounded-[40px] text-center text-black overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-20 opacity-10 rotate-12">
                   <Settings size={200} />
                </div>
                <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-8 max-w-3xl mx-auto uppercase leading-[0.95]">
                  Need a custom <br />
                  <span className="opacity-40 italic">Industrial solution?</span>
                </h2>
                <p className="text-black/60 max-w-xl mx-auto text-sm md:text-lg font-medium mb-12">
                  현장 도면 분석부터 시공까지, <br />
                  전문 엔지니어가 최적의 도어 시스템을 추천해드립니다.
                </p>
                <a href="#contact" onClick={() => setCurrentView('home')} className="inline-flex items-center justify-center px-12 py-6 bg-black text-white text-[12px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-neutral-800 transition-all shadow-2xl">
                  문의하기 <ArrowRight className="ml-2" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        ) : currentView === 'inquiries' ? (
          <motion.div
            key="inquiries-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen pt-40 pb-32 bg-[#050505]"
          >
            <div className="max-w-7xl mx-auto px-6">
               <div className="mb-20">
                  <button 
                    onClick={() => setCurrentView('home')}
                    className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 hover:-translate-x-1 transition-transform"
                  >
                    <ChevronLeft size={14} />
                    메인으로 돌아가기
                  </button>
                  <div className="flex flex-wrap items-center gap-4">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white uppercase">Inquiry <span className="text-neutral-700 italic">Management</span></h1>
                    {quoteInquiries.length > 0 && (
                      <button 
                        onClick={async () => {
                          if (window.confirm("정말로 모든 문의 내역을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
                            setQuoteInquiries([]);
                            await syncData('inquiries', []);
                            alert("모든 문의 내역이 삭제되었습니다.");
                          }
                        }}
                        className="px-6 py-3 bg-red-600/10 border border-red-600/20 text-red-500 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all ml-auto"
                      >
                        문의 전체 삭제
                      </button>
                    )}
                  </div>
               </div>

               {quoteInquiries.length === 0 ? (
                 <div className="bg-white/5 border border-white/10 rounded-[32px] p-40 text-center">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8">
                       <Menu size={40} className="text-neutral-700" />
                    </div>
                    <p className="text-neutral-500 font-light text-lg">등록된 견적 문의 내역이 아직 없습니다.</p>
                 </div>
               ) : (
                 <div className="grid grid-cols-1 gap-8">
                    {quoteInquiries.map((inquiry) => (
                      <div key={inquiry.id} className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-10 hover:border-gold/20 transition-all shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -mr-32 -mt-32" />
                        
                        <div className="relative z-10 flex flex-wrap items-start justify-between gap-6 mb-10 pb-10 border-b border-white/5">
                           <div>
                              <div className="flex items-center gap-3 mb-4">
                                 <div className="px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full">
                                    <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em]">{inquiry.date}</span>
                                 </div>
                                 {inquiry.status === 'new' && (
                                   <div className="px-3 py-1 bg-gold text-black text-[9px] font-black rounded uppercase tracking-widest animate-pulse">
                                      New Inquiry
                                   </div>
                                 )}
                              </div>
                              <h3 className="text-3xl font-bold text-white tracking-tight leading-tight mb-2">
                                {inquiry.title || "제목 없음"}
                              </h3>
                              <div className="flex items-center gap-4 text-neutral-400 text-sm">
                                <span className="flex items-center gap-1.5"><User size={14} className="text-gold/50" /> {inquiry.name}</span>
                                <span className="flex items-center gap-1.5"><Phone size={14} className="text-gold/50" /> {inquiry.phone}</span>
                                {inquiry.email && <span className="flex items-center gap-1.5"><MessageCircle size={14} className="text-gold/50" /> {inquiry.email}</span>}
                              </div>
                           </div>
                           <button 
                             onClick={async () => {
                               if(window.confirm("이 문의 내역을 영구적으로 삭제하시겠습니까?")) {
                                 const updated = quoteInquiries.filter(q => q.id !== inquiry.id);
                                 setQuoteInquiries(updated);
                                 await syncData('inquiries', updated);
                               }
                             }}
                             className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/20 transition-all"
                             title="문의 삭제"
                           >
                             <Trash2 size={22} />
                           </button>
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
                           <div className="lg:col-span-4 space-y-10">
                              <div>
                                 <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] mb-4">현장 위치 / 지역</p>
                                 <p className="text-white text-lg font-medium">{inquiry.location || "정보 없음"}</p>
                              </div>
                              <div>
                                 <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] mb-4">문의 유형</p>
                                 <div className="flex flex-wrap gap-2.5">
                                    {inquiry.types.map((t: string) => (
                                      <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 text-white text-[11px] font-bold rounded-xl uppercase tracking-wider">{t}</span>
                                    ))}
                                    {inquiry.types.length === 0 && <span className="text-neutral-700 italic text-sm">유형 선택 없음</span>}
                                 </div>
                              </div>
                           </div>
                           <div className="lg:col-span-8">
                              <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] mb-4">상세 문의 사양</p>
                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 min-h-[160px]">
                                 <p className="text-neutral-300 whitespace-pre-wrap leading-relaxed text-lg font-light italic">"{inquiry.content}"</p>
                              </div>
                           </div>
                        </div>
                      </div>
                    ))}
                 </div>
               )}
            </div>
          </motion.div>
        ) : currentView === 'reviews' ? (
          <motion.div
            key="reviews-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-40 pb-32 bg-[#050505]"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-20">
                <button 
                  onClick={() => setCurrentView('home')}
                  className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 hover:-translate-x-1 transition-transform"
                >
                  <ChevronLeft size={14} />
                  메인으로 돌아가기
                </button>
                <div className="flex flex-wrap items-end justify-between gap-8">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white uppercase">Customer <span className="text-neutral-700 italic">Reviews</span></h1>
                    <p className="text-neutral-500 text-sm mt-4 font-light max-w-xl">
                      태양강화자동문을 이용해주신 고객님들의 소중한 후기입니다.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <button 
                      onClick={() => setIsReviewModalOpen(true)}
                      className="flex items-center gap-3 px-8 py-4 border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-gold hover:text-black transition-all duration-500 shadow-xl shadow-gold/5"
                    >
                      <MessageCircle size={16} />
                      후기 작성하기
                    </button>
                    {isAdmin && testimonialsList.length > 0 && (
                      <button 
                        onClick={async () => {
                          if (window.confirm("정말로 모든 후기를 삭제하시겠습니까?")) {
                            setTestimonialsList([]);
                            await syncData('testimonials', []);
                            alert("모든 후기가 삭제되었습니다.");
                          }
                        }}
                        className="px-6 py-3 bg-red-600/10 border border-red-600/20 text-red-500 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
                      >
                        후기 전체 삭제
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {testimonialsList.length === 0 ? (
                    <div className="col-span-full py-20 text-center border border-white/5 rounded-3xl bg-[#0a0a0a]/50">
                      <MessageCircle size={40} className="mx-auto text-neutral-800 mb-4" strokeWidth={1} />
                      <p className="text-neutral-500 text-sm font-light italic">등록된 후기가 없습니다. 첫 번째 후기의 주인공이 되어주세요.</p>
                    </div>
                  ) : (
                    testimonialsList.map((t, i) => (
                      <motion.div 
                        key={t.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 relative group hover:border-gold/20 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-8">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, j) => (
                              <Star 
                                key={j} 
                                size={14} 
                                fill={j < t.rating ? "#c8a97e" : "transparent"} 
                                stroke={j < t.rating ? "none" : "#333"} 
                              />
                            ))}
                          </div>
                          {isAdmin && (
                            <div className="flex gap-2">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEditingTestimonial(t);
                                }}
                                className="w-10 h-10 bg-gold/10 text-gold hover:bg-gold hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
                              >
                                <Edit size={16} />
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteTestimonial(t.id);
                                }}
                                className="w-10 h-10 bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          )}
                        </div>
                        <p className="text-neutral-400 font-light leading-relaxed mb-10 italic text-sm line-clamp-4 group-hover:line-clamp-none transition-all">
                          {t.text}
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h5 className="text-white text-sm font-bold">{t.name}</h5>
                            <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest">{t.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="gallery-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-40 pb-32 bg-[#050505]"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
                <div className="text-center md:text-left">
                  <button 
                    onClick={() => setCurrentView('home')}
                    className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest mb-6 hover:translate-x-[-4px] transition-transform"
                  >
                    <ChevronRight size={14} className="rotate-180" />
                    메인으로 돌아가기
                  </button>
                  <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">현장 시공 갤러리</h1>
                  <p className="text-neutral-500 text-sm mt-4 font-light max-w-xl">
                    태양강화자동문이 시공한 다양한 현장의 기록입니다. <br className="hidden md:block" />
                    디테일한 시공 사진과 완성된 공간의 분위기를 확인해보세요.
                  </p>
                </div>

                {isAdmin && (
                  <div className="mt-10 md:mt-0 flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => {
                        const form = document.getElementById('gallery-admin-form');
                        form?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-8 py-4 bg-gold text-black rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-gold/20 flex items-center gap-2"
                    >
                      <Plus size={16} />
                      새 포트폴리오 등록
                    </button>
                    <button 
                      onClick={async () => {
                        if (window.confirm("모든 시공 사례를 삭제하시겠습니까? (후기는 유지됩니다)")) {
                          setPortfolioItems([]);
                          await syncData('portfolio', []);
                          alert("모든 시공 사례가 삭제되었습니다.");
                        }
                      }}
                      className="px-8 py-4 bg-red-600/10 border border-red-600/20 text-red-500 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all"
                    >
                      시공 사례 전체 삭제
                    </button>
                    <button 
                      onClick={async () => {
                        if (window.confirm("모든 데이터를 공장 초기화하시겠습니까? (시공사례, 후기, 제품, 문의 내역이 모두 삭제됩니다)")) {
                          setPortfolioItems([]);
                          setTestimonialsList([]);
                          setProductsData(productCategories);
                          setQuoteInquiries([]);
                          
                          // Sync all to empty/default
                          await syncData('portfolio', []);
                          await syncData('testimonials', []);
                          await syncData('products', productCategories);
                          await syncData('inquiries', []);
                          
                          localStorage.removeItem('isAdmin');
                          setIsAdmin(false);
                          alert("모든 데이터가 초기화되었습니다.");
                          window.location.reload();
                        }
                      }}
                      className="px-8 py-4 bg-white/5 border border-white/10 text-neutral-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all"
                    >
                      전체 데이터 초기화
                    </button>
                    <button 
                      onClick={handleAdminToggle}
                      className="px-8 py-4 bg-red-600/10 border border-red-600/20 text-red-500 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all"
                    >
                      관리자 종료
                    </button>
                  </div>
                )}
              </div>

              {/* Gallery Admin Form */}
              <AnimatePresence>
                {isAdmin && (
                  <motion.div 
                    id="gallery-admin-form"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-32 overflow-hidden"
                  >
                    <div className="bg-[#0a0a0a] border border-gold/20 p-8 md:p-12 rounded-3xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                           <div className="space-y-2">
                             <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">프로젝트 제목</label>
                             <input 
                               value={newTitle}
                               onChange={(e) => setNewTitle(e.target.value)}
                               type="text" 
                               placeholder="예: 성수동 카페 루프탑 시공" 
                               className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700" 
                             />
                           </div>
                           <div className="space-y-2">
                             <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">시공 상세 설명</label>
                             <textarea 
                               value={newDesc}
                               onChange={(e) => setNewDesc(e.target.value)}
                               rows={4}
                               placeholder="공간의 특성과 적용된 기술을 설명해주세요" 
                               className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold/50 transition-all resize-none placeholder:text-neutral-700"
                             />
                           </div>
                        </div>

                        <div className="space-y-6">
                           <div className="space-y-2">
                             <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">현장 사진들 (여러 장 선택 가능)</label>
                             <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-4">
                               {tempImages.map((src, idx) => (
                                 <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group shadow-lg">
                                   <img src={src} className="w-full h-full object-cover" />
                                   <button 
                                     onClick={() => setTempImages(prev => prev.filter((_, i) => i !== idx))}
                                     className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                   >
                                     <X size={12} />
                                   </button>
                                 </div>
                               ))}
                               <label className="aspect-square bg-white/5 border-2 border-dashed border-white/10 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gold/30 hover:bg-gold/5 transition-all text-neutral-500 hover:text-gold">
                                 <input type="file" multiple className="hidden" onChange={handleImageUpload} accept="image/*" />
                                 <Upload size={20} className="mb-1" />
                                 <span className="text-[9px] font-bold">추가</span>
                               </label>
                             </div>
                           </div>

                           <button 
                             onClick={handleAddProject}
                             className="w-full py-5 bg-gold text-black font-black uppercase text-[11px] tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-xl shadow-gold/10"
                           >
                             갤러리 등록 완료
                           </button>
                           <p className="text-[9px] text-neutral-600 text-center uppercase tracking-widest leading-relaxed">
                             첫 번째 사진이 대표 이미지로 노출됩니다.
                           </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pagination Gallery List */}
              <div className="space-y-32">
                {portfolioItems.length === 0 ? (
                  <div className="py-40 text-center border border-white/5 rounded-3xl bg-[#0a0a0a]/50">
                    <Layers size={48} className="mx-auto text-neutral-800 mb-6" strokeWidth={1} />
                    <p className="text-neutral-500 font-light">등록된 시공 사례가 없습니다.</p>
                  </div>
                ) : (
                  currentItems.map((item, index) => {
                    const idx = (galleryPage - 1) * itemsPerPage + index;
                    return (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                          <div className="lg:col-span-4 lg:sticky lg:top-40">
                            <div className="flex items-center gap-4 mb-6">
                              <span className="text-gold font-mono text-2xl">{(idx + 1).toString().padStart(2, '0')}</span>
                              <div className="h-[1px] flex-grow bg-white/10" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6 leading-tight group-hover:text-gold transition-colors">{item.title}</h2>
                            <p className="text-neutral-400 font-light leading-relaxed mb-8 text-sm">
                              {item.desc || "상세 설명이 등록되지 않은 시공사례입니다. 정밀한 시공과 프리미엄 디자인이 적용된 현장입니다."}
                            </p>
                            
                            <button 
                              onClick={() => setSelectedProject(item)}
                              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all mb-8 block lg:inline-block"
                            >
                              자세히 보기
                            </button>

                            {isAdmin && (
                              <div className="flex items-center gap-4 mt-4 p-4 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEditingProject(item);
                                  }}
                                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 text-gold text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all rounded-lg"
                                >
                                  <Edit size={14} />
                                  수정
                                </button>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    handleDeleteProject(item.id);
                                  }}
                                  className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all rounded-lg"
                                >
                                  <Trash2 size={14} />
                                  삭제
                                </button>
                              </div>
                            )}
                          </div>

                          <div className="lg:col-span-8 space-y-8 cursor-pointer" onClick={() => setSelectedProject(item)}>
                            {/* Main Image */}
                            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl relative">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                              />
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                  <Maximize2 size={24} className="text-white" />
                                </div>
                              </div>
                            </div>
                            
                            {/* Additional Images Grid */}
                            {item.images && item.images.length > 1 && (
                              <div className={`grid gap-8 ${item.images.length === 2 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                {item.images.slice(1, 3).map((img, i) => (
                                  <div key={i} className="aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 shadow-xl">
                                    <img src={img} alt={`${item.title} ${i+2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-40 flex justify-center items-center gap-4">
                  <button 
                    onClick={() => {
                      setGalleryPage(prev => Math.max(1, prev - 1));
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                    disabled={galleryPage === 1}
                    className="p-4 bg-white/5 border border-white/10 rounded-full text-white disabled:opacity-30 hover:bg-white/10 transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => {
                          setGalleryPage(i + 1);
                          window.scrollTo({ top: 0, behavior: 'auto' });
                        }}
                        className={`w-12 h-12 rounded-full font-mono text-sm transition-all border ${
                          galleryPage === i + 1 
                            ? 'bg-gold border-gold text-black font-bold shadow-lg shadow-gold/20' 
                            : 'bg-white/5 border-white/10 text-neutral-500 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={() => {
                      setGalleryPage(prev => Math.min(totalPages, prev + 1));
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                    disabled={galleryPage === totalPages}
                    className="p-4 bg-white/5 border border-white/10 rounded-full text-white disabled:opacity-30 hover:bg-white/10 transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}

              {/* Bottom Navigation */}
              <div className="mt-40 pt-20 border-t border-white/5 flex flex-col items-center">
                <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-10">End of Gallery</p>
                <button 
                  onClick={() => {
                    setCurrentView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-12 py-5 border border-gold text-gold rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all duration-500"
                >
                  홈으로 돌아가기
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal / Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-7xl max-h-full bg-neutral-950 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>

              <div className="flex-grow overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Image Grid Side */}
                  <div className="p-4 md:p-8 space-y-6">
                    <div className="aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                      <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
                    </div>
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <div className="grid grid-cols-2 gap-6">
                        {selectedProject.images.slice(1).map((img, i) => (
                          <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt={`${selectedProject.title} ${i+2}`} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Info Side */}
                  <div className="p-8 md:p-16 flex flex-col justify-center">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-3 mb-8">
                        <span className="px-3 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest rounded-full border border-gold/20">시공 과정</span>
                        <div className="h-[1px] w-12 bg-white/10" />
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                        {selectedProject.title}
                      </h2>
                      
                      <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-lg">
                        <p>{selectedProject.desc || "이 현장은 당사의 전문 시공 기술과 공간 컨셉에 맞춘 최적의 디자인 솔루션이 결합된 성공적인 사례입니다."}</p>
                        <p>우리는 고객의 요구사항을 깊이 이해하고, 공간의 가치를 극대화할 수 있는 자재 선정부터 정교한 마감까지 모든 과정을 투명하고 전문적으로 진행하였습니다.</p>
                      </div>

                      <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-2 gap-10">
                        <div>
                          <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-3">서비스 유형</p>
                          <p className="text-white font-medium text-lg">프리미엄 인테리어</p>
                        </div>
                        <div>
                          <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-3">소요 기간</p>
                          <p className="text-white font-medium text-lg">상세문의 필요</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => {
                          const projectTitle = selectedProject?.title;
                          setSelectedProject(null);
                          
                          // Pre-fill the quote form with the project info
                          if (projectTitle) {
                            setQuoteForm(prev => ({
                              ...prev,
                              content: `[${projectTitle}] 이 시공 사례와 비슷한 느낌으로 견적 상담 원합니다.`
                            }));
                          }

                          if (currentView === 'gallery') {
                            setCurrentView('home');
                            // View transition duration is 0.5s, so we wait 0.6s
                            setTimeout(() => {
                              const contactElement = document.getElementById('contact');
                              if (contactElement) {
                                contactElement.scrollIntoView({ behavior: 'smooth' });
                              }
                            }, 600);
                          } else {
                            // Even if already on home, wait for modal exit animation
                            setTimeout(() => {
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                          }
                        }}
                        className="mt-16 w-full py-6 bg-white text-black font-black uppercase text-[12px] tracking-[0.4em] rounded-2xl hover:bg-gold transition-all shadow-xl hover:-translate-y-1"
                      >
                        이런 느낌으로 견적 상담받기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 border border-gold flex items-center justify-center">
                  <span className="text-gold font-bold text-xs uppercase">T</span>
                </div>
                <span className="uppercase text-lg font-black text-white tracking-[0.4em]">태양강화자동문</span>
              </div>
              <p className="text-sm text-neutral-500 max-w-sm mb-12 leading-relaxed font-light italic">
                정밀한 시공, 최고급 자재, 사후 관리까지. <br />
                우리는 단순한 '문'을 넘어 공간의 품격을 설치합니다.
              </p>
              <div className="flex gap-4">
                <a href="mailto:sps820@naver.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-gold hover:border-gold/50 transition-all duration-300">
                  <Mail size={18} strokeWidth={1.5} />
                </a>
                <a href="tel:02-2663-6153" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-gold hover:border-gold/50 transition-all duration-300">
                  <Phone size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 opacity-40">전체 메뉴</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-gold transition-colors">홈</a></li>
                <li><a href="#" onClick={handleViewProducts} className="hover:text-gold transition-colors">제품소개</a></li>
                <li><a href="#" onClick={handleViewGallery} className="hover:text-gold transition-colors">시공 갤러리</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-gold transition-colors">고객후기</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('quote'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-gold transition-colors">견적문의</a></li>
                <li>
                  <button onClick={handleAdminToggle} className="hover:text-gold transition-colors text-left uppercase tracking-[0.2em]">
                    {isAdmin ? '관리자 로그아웃' : '관리자 로그인'}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 opacity-40">고객 지원</h4>
              <ul className="space-y-6 text-xs text-neutral-500 font-medium tracking-wide">
                <li className="flex items-start gap-4">
                  <MapPin size={16} className="mt-1 text-gold/50 shrink-0" />
                  <span className="leading-relaxed">서울특별시 강서구 공항대로 <br /> (태양강화자동문 시공센터)</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={16} className="text-gold/50 shrink-0" />
                  <span>02-2663-6153</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-[9px] uppercase font-black tracking-[0.3em] text-neutral-800">
            <p>© 2026 태양강화자동문. Engineered Excellence.</p>
            <div className="flex gap-12 mt-6 md:mt-0">
               <span>개인정보처리방침</span>
               <span>이용약관</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="tel:02-2663-6153" 
        className="fixed z-50 right-10 bottom-10 flex items-center justify-center bg-gold text-black w-16 h-16 rounded-full shadow-2xl hover:bg-white transition-colors"
      >
        <PhoneCall size={24} />
      </motion.a>
    </div>
  );
}
