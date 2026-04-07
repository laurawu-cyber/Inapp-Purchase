import { useNavigate, useSearchParams } from 'react-router';
import { useLanguage } from '../i18n/LanguageContext';

// Figma assets (valid for 7 days)
const imgBackground = "https://www.figma.com/api/mcp/asset/9a881f82-e75d-443a-9820-82c06f71f3f7";
const imgStripeLogo = "https://www.figma.com/api/mcp/asset/3bef13fc-73f9-4727-a0de-97a35d855ee9";

export default function ManageBillingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const workspaceName = searchParams.get('workspaceName') || 'Plaud Team';

  const { t, lang } = useLanguage();

  const invoices = [
    { id: t('manageBilling.invoiceDate'), desc: t('manageBilling.invoiceDesc'), amount: lang === 'ja' ? '¥360,000' : '$2,400.00' },
  ];

  const handleReturn = () => {
    navigate(`/home-team?workspaceName=${encodeURIComponent(workspaceName)}&openSettings=billing`);
  };

  return (
    <div className="flex min-h-screen" style={{ fontFamily: "'Roboto', sans-serif" }}>

      {/* ── Left black panel ── */}
      <div className="relative flex flex-col bg-black shrink-0" style={{ width: '30%', minWidth: '280px', maxWidth: '420px' }}>
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full object-cover object-center w-full opacity-40" src={imgBackground} />
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-1 px-[64px] py-[64px]">
          {/* Title */}
          <div className="mt-[80px]">
            <h1 className="text-white font-medium text-[24px] leading-[32px]">
              {t('manageBilling.title')}
            </h1>
          </div>

          {/* Return link */}
          <button
            onClick={handleReturn}
            className="mt-[24px] flex items-center gap-[8px] text-white text-[14px] font-medium cursor-pointer w-fit hover:opacity-80"
          >
            {/* Left arrow */}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6L8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('manageBilling.return')}
          </button>
        </div>

        {/* Footer */}
        <div className="relative px-[64px] py-[32px] opacity-60 flex flex-col gap-[8px]">
          {/* Row 1: Powered by Stripe */}
          <div className="flex items-center">
            <span className="text-white text-[12px] leading-[16px]">{t('manageBilling.poweredBy')}</span>
            <img alt="Stripe" src={imgStripeLogo} className="ml-[8px] object-contain" style={{ width: 38, height: 16 }} />
          </div>
          {/* Row 2: Links */}
          <div className="flex items-center">
            <span className="text-white text-[12px] leading-[20px] cursor-pointer hover:opacity-80 whitespace-nowrap">{t('manageBilling.learnStripe')}</span>
            <div className="mx-[10px]" style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.3)' }} />
            <span className="text-white text-[12px] leading-[20px] cursor-pointer hover:opacity-80 mr-[10px]">{t('manageBilling.terms')}</span>
            <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.3)' }} />
            <span className="text-white text-[12px] leading-[20px] cursor-pointer hover:opacity-80 ml-[10px]">{t('manageBilling.privacy')}</span>
          </div>
        </div>
      </div>

      {/* ── Right white panel ── */}
      <div className="flex-1 bg-white overflow-y-auto">
        <div className="max-w-[700px] px-[80px] py-[60px]">

          {/* PAYMENT METHOD */}
          <Section title={t('manageBilling.paymentMethod')}>
            {/* Card row */}
            <div className="flex items-center justify-between py-[12px] border-b border-[#e3e8ee]">
              <div className="flex items-center gap-[16px]">
                {/* Mastercard icon */}
                <div className="relative w-[44px] h-[28px] shrink-0">
                  <div className="absolute top-0 left-0 w-[28px] h-[28px] rounded-full bg-[#eb001b] opacity-90" />
                  <div className="absolute top-0 left-[16px] w-[28px] h-[28px] rounded-full bg-[#f79e1b] opacity-90" />
                </div>
                <div>
                  <p className="text-[#1a1f36] text-[15px] font-medium leading-[24px]">Mastercard <span className="font-normal text-[#697386]">····</span> 4242</p>
                  <p className="text-[#697386] text-[13px] leading-[20px]">{`${t('manageBilling.expires')} 08 / 2028`}</p>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <span className="text-[12px] text-[#697386] bg-[#f0f3f9] px-[8px] py-[2px] rounded-[4px]">{t('manageBilling.default')}</span>
                <button className="text-[#3c4257] text-[14px] font-medium cursor-pointer hover:text-black">{t('manageBilling.update')}</button>
              </div>
            </div>

            {/* Add payment method */}
            <button className="mt-[16px] flex items-center gap-[8px] text-[#3c4257] text-[15px] font-medium cursor-pointer hover:text-black">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              {t('manageBilling.addPayment')}
            </button>
          </Section>

          <Divider />

          {/* BILLING INFORMATION */}
          <Section title={t('manageBilling.billingInfo')}>
            <div className="flex flex-col gap-[10px] py-[4px]">
              <InfoRow label={t('manageBilling.company')} value="Acme Corp" />
              <InfoRow label={t('manageBilling.email')} value="billing@acme.com" />
              <InfoRow label={t('manageBilling.address')} value="123 Market St, Suite 400, San Francisco, CA 94105" />
              <InfoRow label={t('manageBilling.country')} value="United States" />
              <InfoRow label={t('manageBilling.taxId')} value="US-12-3456789" />
            </div>
            <button className="mt-[16px] flex items-center gap-[8px] text-[#3c4257] text-[15px] font-medium cursor-pointer hover:text-black">
              {/* Edit/pencil icon */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M8.5 1.5l2 2L3 11H1v-2L8.5 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t('manageBilling.updateInfo')}
            </button>
          </Section>

          <Divider />

          {/* INVOICE HISTORY */}
          <Section title={t('manageBilling.invoiceHistory')}>
            {invoices.map((inv, i) => (
              <div key={i} className={`flex items-center justify-between py-[14px] ${i < invoices.length - 1 ? 'border-b border-[#e3e8ee]' : ''}`}>
                <div className="flex items-center gap-[24px]">
                  <p className="text-[#697386] text-[14px] w-[100px] shrink-0">{inv.id}</p>
                  <p className="text-[#1a1f36] text-[14px]">{inv.desc}</p>
                </div>
                <div className="flex items-center gap-[24px] shrink-0">
                  <p className="text-[#1a1f36] text-[14px] font-medium">{inv.amount}</p>
                  <div className="flex items-center gap-[6px]">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#1a7f4b]" />
                    <span className="text-[#1a7f4b] text-[13px]">{t('manageBilling.paid')}</span>
                  </div>
                  <button className="text-[#3c4257] text-[13px] font-medium cursor-pointer hover:text-black flex items-center gap-[4px]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v7M3 6l3 3 3-3M1 11h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t('manageBilling.pdf')}
                  </button>
                </div>
              </div>
            ))}
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-[8px]">
      <p
        className="text-[#1a1f36] text-[12px] font-medium leading-[20px] mb-[16px]"
        style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="my-[40px] h-px bg-[#e3e8ee]" />;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-[16px]">
      <p className="text-[#697386] text-[14px] leading-[22px] w-[80px] shrink-0">{label}</p>
      <p className="text-[#1a1f36] text-[14px] leading-[22px]">{value}</p>
    </div>
  );
}
