type SectionProps = {
  title:string; 
  children?: any;
}

export default function Section ({ title, children }: SectionProps) {
  return (
    <section>
      <header>
        <h2 className="title md">{ title }</h2>
      </header>
      { children }
    </section>
  );
};