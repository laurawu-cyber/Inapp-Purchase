import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        background: 'white',
        border: '1px solid #d6d6d6',
        borderRadius: 8,
        boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif",
        fontSize: 13,
        userSelect: 'none',
      }}
    >
      <button
        onClick={() => setLang('en')}
        style={{
          padding: '6px 14px',
          background: lang === 'en' ? '#000' : 'transparent',
          color: lang === 'en' ? '#fff' : '#3d3d3d',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          fontWeight: lang === 'en' ? 500 : 400,
          transition: 'background 0.15s, color 0.15s',
        }}
      >
        EN
      </button>
      <div style={{ width: 1, background: '#d6d6d6', alignSelf: 'stretch' }} />
      <button
        onClick={() => setLang('ja')}
        style={{
          padding: '6px 14px',
          background: lang === 'ja' ? '#000' : 'transparent',
          color: lang === 'ja' ? '#fff' : '#3d3d3d',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          fontWeight: lang === 'ja' ? 500 : 400,
          transition: 'background 0.15s, color 0.15s',
        }}
      >
        日本語
      </button>
    </div>
  );
}
