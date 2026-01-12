interface CredibilitySectionProps {
  text: string;
}

export function CredibilitySection({ text }: CredibilitySectionProps) {
  return (
    <div className="text-center py-8">
      <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">{text}</p>
    </div>
  );
}
