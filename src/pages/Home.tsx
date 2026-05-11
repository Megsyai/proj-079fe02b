import { Coffee, Leaf, ShieldCheck, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-coffee-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="text-coffee-500 w-8 h-8" />
            <span className="text-2xl font-bold tracking-tighter">أروما</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-coffee-400 transition-colors">عن الشركة</a>
            <a href="#products" className="hover:text-coffee-400 transition-colors">منتجاتنا</a>
            <a href="#contact" className="hover:text-coffee-400 transition-colors">اتصل بنا</a>
          </div>
          <button className="bg-coffee-600 hover:bg-coffee-500 text-white px-6 py-2 rounded-full transition-all">
            اطلب الآن
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-coffee-800/20 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-coffee-900/50 border border-coffee-800 text-coffee-400 text-sm font-medium">
              محمصة فاخرة متخصصة
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              استمتع بكل <br />
              <span className="text-coffee-500">قطرة غنية</span> بالنكهة
            </h1>
            <p className="text-lg text-coffee-300 max-w-lg leading-relaxed">
              نحن نختار أجود أنواع البن من مزارع مستدامة حول العالم، لنقدم لك تجربة قهوة لا تُنسى في كل صباح.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-coffee-600 hover:bg-coffee-700 rounded-xl font-bold transition-all transform hover:scale-105">
                اكتشف محاصيلنا
              </button>
              <button className="px-8 py-4 glass-card hover:bg-white/10 transition-all">
                قصتنا
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
              alt="Coffee" 
              className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 glass-card p-6 flex items-center gap-4 animate-bounce">
              <div className="bg-coffee-600 p-3 rounded-full">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl">+15</p>
                <p className="text-xs text-coffee-300">نوع من المحاصيل</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-coffee-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "عضوية 100%", desc: "محاصيل طبيعية خالية من الإضافات الكيميائية." },
              { icon: ShieldCheck, title: "جودة مضمونة", desc: "نتبع أعلى معايير التحميص لضمان النكهة المثالية." },
              { icon: MapPin, title: "مصادر عالمية", desc: "نستورد حبوبنا مباشرة من مزارع إثيوبيا وكولومبيا." }
            ].map((f, i) => (
              <div key={i} className="glass-card p-8 hover:bg-white/10 transition-colors group">
                <f.icon className="w-12 h-12 text-coffee-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-coffee-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Coffee className="text-coffee-500 w-6 h-6" />
            <span className="text-xl font-bold">أروما</span>
          </div>
          <p className="text-coffee-400 text-sm">© 2024 أروما للقهوة المختصة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 hover:text-coffee-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-coffee-500 cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-coffee-500 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
