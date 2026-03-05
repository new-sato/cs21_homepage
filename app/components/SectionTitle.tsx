// このファイルではタイトルのデザインを定義します．

interface Props {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  variant?: 'default' | 'topPage'; 
}

export default function SectionTitle({ children, level = 'h2', variant = 'default' }: Props) {
  const Tag = level;

  // 基本スタイル
  const baseStyle = "font-bold tracking-tight leading-tight";
  
  // バリエーションごとのスタイル定義
  const variantStyles = {
    default: "text-gray-900 mb-4",
    topPage: "text-blue-700 text-center drop-shadow-md mb-12", // トップ用の特別な装飾
  };

  const sizeStyle = {
    h1: "text-4xl sm:text-5xl lg:text-6xl",
    h2: "text-3xl sm:text-3.5xl lg:text-4xl",
    h3: "text-lg",
  };

  return (
    <Tag className={`${baseStyle} ${variantStyles[variant]} ${sizeStyle[level]}`}>
      {children}
    </Tag>
  );
}
