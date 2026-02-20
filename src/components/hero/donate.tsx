import ElegantButton from '../common/styledbutton';

export default function DonateButton() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <ElegantButton onClick={() => alert('Button Clicked!')}>
        Donate who deserve
      </ElegantButton>
    </div>
  );
}