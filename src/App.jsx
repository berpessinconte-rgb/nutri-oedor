import React, { useMemo, useState } from "react";
import { ChevronRight, ChevronLeft, Home, CheckCircle2, Printer, Apple, Brain, Salad, Dumbbell, Moon, HelpCircle, AlertTriangle, Droplets, HeartPulse, RotateCcw } from "lucide-react";

const pages = [
  { key: "home", title: "Guia alimentar na dor crônica", icon: Home },
  { key: "why", title: "Por que alimentação importa?", icon: Brain },
  { key: "gut", title: "Intestino, microbiota e dor", icon: HeartPulse },
  { key: "plate", title: "O prato amigo da dor", icon: Salad },
  { key: "protein", title: "Proteína, músculo e funcionalidade", icon: Dumbbell },
  { key: "fiber", title: "Fibras e saúde intestinal", icon: Apple },
  { key: "avoid", title: "O que reduzir no dia a dia", icon: AlertTriangle },
  { key: "routine", title: "Sono, água e rotina", icon: Moon },
  { key: "plan", title: "Plano de 7 dias", icon: CheckCircle2 },
  { key: "conditions", title: "Guia por tipo de dor", icon: Brain },
  { key: "quiz", title: "Quiz final", icon: HelpCircle },
  { key: "summary", title: "Resumo para imprimir", icon: Printer },
];

const quiz = [
  {
    q: "Qual frase é mais correta sobre alimentação e dor crônica?",
    options: ["Existe uma dieta milagrosa que cura a dor.", "A alimentação não cura sozinha, mas pode ajudar inflamação, energia, intestino, sono e adesão ao tratamento.", "Só suplementos funcionam.", "Quem tem dor precisa cortar todos os carboidratos."],
    answer: 1,
    explain: "O objetivo é melhorar o terreno metabólico e funcional. Não existe milagre, existe constância.",
  },
  {
    q: "O que mais ajuda a microbiota intestinal?",
    options: ["Refrigerante zero todo dia", "Fibras de frutas, verduras, legumes, feijão, aveia e sementes", "Álcool no fim de semana", "Pular refeições"],
    answer: 1,
    explain: "Fibras alimentam bactérias benéficas e favorecem a produção de metabólitos protetores.",
  },
  {
    q: "Por que proteína é importante para quem tem dor crônica?",
    options: ["Porque substitui todos os remédios", "Porque ajuda massa muscular, força, recuperação e funcionalidade", "Porque elimina a necessidade de exercício", "Porque deve ser consumida apenas no jantar"],
    answer: 1,
    explain: "Músculo é proteção. Melhor força geralmente significa melhor autonomia e menor sobrecarga articular.",
  },
  {
    q: "Qual opção costuma piorar inflamação e saúde intestinal quando frequente?",
    options: ["Feijão", "Azeite de oliva", "Ultraprocessados, excesso de açúcar e álcool", "Frutas"],
    answer: 2,
    explain: "Não precisa proibir tudo, mas frequência alta atrapalha muito.",
  },
  {
    q: "Qual mudança é mais realista para começar?",
    options: ["Mudar tudo amanhã", "Fazer jejum longo sem orientação", "Escolher 1 a 2 metas simples por semana", "Cortar glúten, lactose e carne para todos"],
    answer: 2,
    explain: "A melhor mudança é a que o paciente consegue repetir.",
  },
  {
    q: "Fibras ajudam principalmente em:",
    options: ["Piorar o intestino", "Alimentar bactérias boas e ajudar o funcionamento intestinal", "Substituir proteínas", "Aumentar inflamação"],
    answer: 1,
    explain: "As fibras ajudam a microbiota e a saúde intestinal.",
  },
  {
    q: "Qual hábito costuma piorar enxaqueca em algumas pessoas?",
    options: ["Hidratação adequada", "Refeições regulares", "Jejum prolongado e excesso de álcool", "Frutas e verduras"],
    answer: 2,
    explain: "Longos períodos sem comer e álcool podem ser gatilhos.",
  },
  {
    q: "Na dor oncológica, um dos objetivos da alimentação é:",
    options: ["Fazer dietas muito restritivas", "Manter energia, peso e massa muscular", "Retirar toda gordura da alimentação", "Substituir o tratamento médico"],
    answer: 1,
    explain: "Nutrição adequada ajuda força, tolerância ao tratamento e recuperação.",
  },
];

function Card({ children, className = "" }) {
  return <div className={"rounded-3xl bg-white p-5 shadow-sm border border-slate-100 " + className}>{children}</div>;
}

function Button({ children, onClick, disabled, variant = "primary" }) {
  const style = variant === "secondary"
    ? "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50"
    : variant === "ghost"
    ? "text-slate-700 hover:bg-slate-100"
    : "bg-emerald-600 text-white hover:bg-emerald-700";
  return <button onClick={onClick} disabled={disabled} className={"inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 font-semibold transition disabled:opacity-50 " + style}>{children}</button>;
}

function Tag({ children }) {
  return <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 border border-emerald-100">{children}</span>;
}

function Progress({ index }) {
  const pct = Math.round(((index + 1) / pages.length) * 100);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">
        <span>Página {index + 1} de {pages.length}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full rounded-full bg-emerald-500" style={{ width: pct + "%" }} />
      </div>
    </div>
  );
}

function HomePage({ go }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 items-center">
      <Card className="p-7">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700"><Apple size={30} /></div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">Guia alimentar para pacientes com dor crônica</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">Um guia simples para entender como alimentação, intestino, músculo, sono e rotina podem ajudar no controle da dor.</p>
        <div className="mt-5 flex flex-wrap gap-2"><Tag>Sem dieta milagrosa</Tag><Tag>Foco em hábitos</Tag><Tag>Linguagem simples</Tag></div>
        <div className="mt-7"><Button onClick={() => go(1)}>Começar <ChevronRight size={20} /></Button></div>
      </Card>
      <Card className="bg-gradient-to-br from-emerald-50 to-sky-50">
        <h2 className="text-xl font-bold text-slate-900">Mensagem principal</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">A alimentação não substitui o tratamento médico, mas pode ser uma parte importante do cuidado: reduzindo inflamação, melhorando o intestino, fortalecendo músculos e ajudando no sono.</p>
      </Card>
    </div>
  );
}

function WhyPage() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <Card className="md:col-span-2">
        <h1 className="text-3xl font-black text-slate-900">Dor crônica é mais que um local doendo</h1>
        <p className="mt-4 text-slate-700 leading-relaxed">Na dor crônica, o corpo pode ficar mais sensível. Sono ruim, estresse, sedentarismo, constipação, excesso de peso e alimentação pobre em nutrientes podem manter o organismo em alerta.</p>
        <p className="mt-3 text-slate-700 leading-relaxed">Por isso, comer melhor não é frescura: é uma forma de ajudar o corpo a funcionar com menos inflamação e mais energia.</p>
      </Card>
      <Card>
        <h2 className="font-bold text-slate-900">Pode ajudar em</h2>
        <ul className="mt-3 space-y-2 text-slate-700"><li>• fibromialgia</li><li>• dor lombar</li><li>• osteoartrose</li><li>• dor miofascial</li><li>• enxaqueca</li><li>• dor visceral</li></ul>
      </Card>
      <Card className="md:col-span-3 bg-amber-50 border-amber-100"><h2 className="font-bold text-amber-900">Importante</h2><p className="mt-2 text-amber-900">Não existe alimento milagroso. O que funciona é um padrão alimentar melhor, repetido na vida real.</p></Card>
    </div>
  );
}

function GutPage() {
  const sinais = ["Constipação frequente", "Estufamento e gases", "Diarreia recorrente", "Dor abdominal", "Náuseas com medicações", "Piora após ultraprocessados ou álcool"];
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Card>
        <h1 className="text-3xl font-black text-slate-900">Seu intestino conversa com o cérebro</h1>
        <p className="mt-4 text-slate-700 leading-relaxed">O intestino e o cérebro estão conectados o tempo inteiro. Essa comunicação acontece por nervos, hormônios, sistema imunológico e pelas bactérias da microbiota intestinal.</p>
        <p className="mt-3 text-slate-700 leading-relaxed">Quando o intestino está saudável, ele ajuda na produção e no equilíbrio de substâncias ligadas ao humor, ao sono, ao estresse e à percepção da dor.</p>
        <p className="mt-3 text-slate-700 leading-relaxed">Quando existe desequilíbrio intestinal, o organismo pode produzir mais substâncias inflamatórias. Isso pode aumentar a sensibilidade do sistema nervoso e fazer o corpo perceber mais dor.</p>
        <p className="mt-3 text-slate-700 leading-relaxed">Por isso, cuidar do intestino não é apenas uma questão digestiva: também pode ajudar energia, humor, sono e controle da dor.</p>
      </Card>
      <Card>
        <h2 className="text-xl font-bold text-slate-900">Sinais de alerta intestinal</h2>
        <div className="mt-4 grid gap-3">{sinais.map((x) => <div key={x} className="rounded-2xl bg-slate-50 p-3 text-slate-700">{x}</div>)}</div>
      </Card>
      <Card className="md:col-span-2"><h2 className="text-xl font-bold text-slate-900">Tradução simples</h2><p className="mt-2 text-slate-700">Mais fibras + comida de verdade + menos álcool e ultraprocessados = mais chance de intestino regulado e corpo menos inflamado.</p></Card>
    </div>
  );
}

function PlatePage() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Card>
        <h1 className="text-3xl font-black text-slate-900">Monte um prato simples</h1>
        <p className="mt-3 text-slate-700">Não precisa pesar comida. Comece pelo prato.</p>

        <div className="mt-5 flex justify-center">
          <div className="relative h-80 w-80 rounded-full overflow-hidden border-[18px] border-emerald-100 shadow-inner bg-white">
            <div className="absolute left-0 top-0 h-full w-1/2 bg-emerald-200 flex items-center justify-center text-center p-4 font-bold text-emerald-900 leading-snug">
              1/2 do prato<br/>verduras e legumes
            </div>

            <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-amber-100 flex items-center justify-center text-center p-3 font-bold text-amber-900 leading-snug border-l border-b border-white">
              1/4 do prato<br/>carboidrato
            </div>

            <div className="absolute right-0 bottom-0 h-1/2 w-1/2 bg-sky-100 flex items-center justify-center text-center p-3 font-bold text-sky-900 leading-snug border-l border-white">
              1/4 do prato<br/>proteína
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-5">
        <Card>
          <h2 className="font-bold text-slate-900">Proteínas</h2>
          <p className="mt-2 text-slate-700">Ovos, frango, peixe, carne magra, feijão, lentilha, grão-de-bico e iogurte natural.</p>
        </Card>

        <Card>
          <h2 className="font-bold text-slate-900">Carboidratos melhores</h2>
          <p className="mt-2 text-slate-700">Arroz, batata, mandioca, aveia, milho, frutas e feijão. Prefira os menos processados.</p>
        </Card>

        <Card>
          <h2 className="font-bold text-slate-900">Gorduras boas</h2>
          <p className="mt-2 text-slate-700">Azeite de oliva, abacate, castanhas, sementes, sardinha e outros peixes.</p>
        </Card>
      </div>
    </div>
  );
}

function ProteinPage() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Card><h1 className="text-3xl font-black text-slate-900">Músculo é remédio funcional</h1><p className="mt-4 text-slate-700 leading-relaxed">Quem tem dor crônica muitas vezes reduz movimento. Com o tempo, perde força. Menos força pode causar mais cansaço, mais quedas, mais sobrecarga e mais dor.</p><p className="mt-3 text-slate-700 leading-relaxed">Proteína adequada ajuda a preservar massa muscular, principalmente quando combinada com exercício gradual, fisioterapia ou caminhada.</p></Card>
      <Card><h2 className="text-xl font-bold text-slate-900">Meta prática</h2><div className="mt-4 space-y-3 text-slate-700"><div className="rounded-2xl bg-slate-50 p-4">Inclua uma fonte de proteína no café da manhã.</div><div className="rounded-2xl bg-slate-50 p-4">Inclua proteína no almoço e jantar.</div><div className="rounded-2xl bg-slate-50 p-4">Após exercício ou fisioterapia, evite ficar muitas horas sem comer.</div></div></Card>
    </div>
  );
}

function FiberPage() {
  const fontes = ["Feijão", "Aveia", "Maçã", "Mamão", "Lentilha", "Verduras", "Legumes", "Sementes"];
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Card>
        <h1 className="text-3xl font-black text-slate-900">Fibras: alimento das bactérias boas</h1>
        <p className="mt-4 text-slate-700 leading-relaxed">As fibras ajudam o intestino a funcionar e servem de alimento para a microbiota intestinal.</p>
        <p className="mt-3 text-slate-700 leading-relaxed">Quando as bactérias boas fermentam as fibras, produzem substâncias que ajudam a proteger a parede intestinal, modular inflamação e melhorar o funcionamento do intestino.</p>
        <p className="mt-3 text-slate-700 leading-relaxed">Além disso, fibras podem ajudar na saciedade, controle do colesterol, glicemia e constipação, sintomas comuns em pacientes com dor crônica e uso de medicações.</p>
      </Card>
      <Card><h2 className="text-xl font-bold text-slate-900">Fontes fáceis</h2><div className="mt-4 grid grid-cols-2 gap-3 text-slate-700">{fontes.map((x) => <div key={x} className="rounded-2xl bg-emerald-50 p-3 text-center font-medium text-emerald-800">{x}</div>)}</div></Card>
      <Card className="md:col-span-2 bg-sky-50 border-sky-100"><h2 className="font-bold text-sky-900">Dica importante</h2><p className="mt-2 text-sky-900">Aumente fibras aos poucos e junto com água. Se aumentar muito rápido, pode dar gases e estufamento.</p><p className="mt-3 text-sky-900">Se houver intestino muito sensível, síndrome do intestino irritável ou grande distensão abdominal, o ideal é aumentar gradualmente e observar tolerância individual.</p></Card>
    </div>
  );
}

function AvoidPage() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Card><h1 className="text-3xl font-black text-slate-900">Não é sobre proibir. É sobre frequência.</h1><p className="mt-4 text-slate-700 leading-relaxed">Alguns alimentos podem piorar inflamação, intestino, sono e energia quando aparecem todos os dias ou em excesso.</p></Card>
      <Card><h2 className="text-xl font-bold text-slate-900">Reduza principalmente</h2><ul className="mt-4 space-y-2 text-slate-700"><li>• refrigerantes e sucos artificiais</li><li>• doces diários</li><li>• bolachas recheadas e salgadinhos</li><li>• embutidos</li><li>• fast-food frequente</li><li>• álcool em excesso</li></ul></Card>
      <Card className="md:col-span-2 bg-rose-50 border-rose-100"><h2 className="font-bold text-rose-900">Atenção às medicações</h2><p className="mt-2 text-rose-900">Opioides, anti-inflamatórios, antidepressivos e anticonvulsivantes podem causar constipação, náuseas, diarreia ou alteração do apetite. Avise a equipe se isso estiver acontecendo.</p></Card>
    </div>
  );
}

function RoutinePage() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <Card><Droplets className="text-sky-600" /><h2 className="mt-3 text-xl font-bold">Água</h2><p className="mt-2 text-slate-700">Desidratação pode piorar fadiga, dor de cabeça, constipação e câimbras.</p></Card>
      <Card><Moon className="text-indigo-600" /><h2 className="mt-3 text-xl font-bold">Sono</h2><p className="mt-2 text-slate-700">Sono ruim aumenta sensibilidade à dor. Evite café à noite e refeições muito pesadas antes de dormir.</p></Card>
      <Card><Dumbbell className="text-emerald-600" /><h2 className="mt-3 text-xl font-bold">Movimento</h2><p className="mt-2 text-slate-700">Comece pequeno. Movimento gradual ajuda dor, humor, intestino e sono.</p></Card>
      <Card className="md:col-span-3"><h1 className="text-2xl font-black text-slate-900">Regra de ouro</h1><p className="mt-2 text-slate-700">Não tente fazer uma dieta perfeita. Faça uma rotina possível.</p></Card>
    </div>
  );
}

function PlanPage() {
  const [checks, setChecks] = useState({});
  const items = ["Tomar água ao acordar", "Comer 1 fruta ao dia", "Colocar proteína no café da manhã", "Metade do prato com verduras ou legumes", "Comer feijão ou outra leguminosa", "Evitar refrigerante por 1 dia", "Evitar doce ou ultraprocessado à noite", "Caminhar ou movimentar o corpo por 10 minutos", "Dormir sem celular na cama"];
  const done = Object.values(checks).filter(Boolean).length;
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Card><h1 className="text-3xl font-black text-slate-900">Plano de 7 dias</h1><p className="mt-3 text-slate-700">Escolha metas simples. Não precisa fazer todas. Tente repetir as melhores durante a semana.</p><div className="mt-5 rounded-3xl bg-emerald-50 p-5 text-center"><div className="text-5xl font-black text-emerald-700">{done}</div><div className="text-sm font-medium text-emerald-900">metas marcadas</div></div></Card>
      <Card><div className="space-y-3">{items.map((item, i) => (<label key={item} className="flex cursor-pointer items-center gap-3 rounded-2xl bg-slate-50 p-3 hover:bg-slate-100"><input type="checkbox" className="h-5 w-5 accent-emerald-600" checked={!!checks[i]} onChange={(e) => setChecks({ ...checks, [i]: e.target.checked })} /><span className="text-slate-700">{item}</span></label>))}</div></Card>
    </div>
  );
}

function ConditionsPage() {
  const cards = [
    { title: "Fibromialgia", color: "emerald", desc: "Pode se beneficiar de rotina alimentar mais estável, boa hidratação, melhora do sono e redução de ultraprocessados.", priorize: ["proteínas adequadas", "frutas e verduras", "fibras e saúde intestinal", "regularidade das refeições"], reduza: ["ultraprocessados frequentes", "excesso de açúcar", "álcool em excesso"] },
    { title: "Dor inflamatória", color: "rose", desc: "Exemplos: artrite reumatoide, espondiloartrites, lúpus, psoríase e algumas doenças intestinais inflamatórias.", priorize: ["azeite de oliva", "peixes e ômega-3", "frutas e verduras", "castanhas e sementes"], reduza: ["ultraprocessados", "frituras frequentes", "álcool em excesso", "excesso de açúcar"] },
    { title: "Enxaqueca", color: "sky", desc: "Algumas pessoas percebem piora com jejum prolongado, álcool, privação de sono ou excesso de cafeína.", priorize: ["hidratação adequada", "refeições regulares", "frutas e verduras", "alimentos naturais"], reduza: ["álcool em excesso", "excesso de cafeína", "longos períodos sem comer", "ultraprocessados frequentes"] },
    { title: "Desgaste de articulações", color: "amber", desc: "Exemplo: osteoartrose de joelho, quadril, mãos e coluna.", priorize: ["proteínas adequadas", "peixes e ômega-3", "frutas e verduras", "azeite de oliva", "alimentos ricos em cálcio e vitamina D"], reduza: ["ultraprocessados", "excesso de açúcar", "refrigerantes", "álcool em excesso"] },
    { title: "Dor oncológica", color: "violet", desc: "Alimentação adequada ajuda energia, manutenção de peso, força muscular e tolerância ao tratamento.", priorize: ["proteínas adequadas", "hidratação", "alimentos mais naturais", "frutas, legumes e verduras", "refeições pequenas e frequentes se houver náusea"], reduza: ["álcool", "ultraprocessados frequentes", "longos períodos sem comer", "dietas muito restritivas sem orientação"] },
  ];
  const bg = { emerald: "bg-emerald-50 border-emerald-100 text-emerald-900", rose: "bg-rose-50 border-rose-100 text-rose-900", sky: "bg-sky-50 border-sky-100 text-sky-900", amber: "bg-amber-50 border-amber-100 text-amber-900", violet: "bg-violet-50 border-violet-100 text-violet-900" };
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {cards.map((c) => (
        <Card key={c.title} className={bg[c.color] + (c.title === "Dor oncológica" ? " md:col-span-2" : "")}>
          <h1 className="text-2xl font-black">{c.title}</h1>
          <p className="mt-3 leading-relaxed">{c.desc}</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div><b>Priorize:</b><ul className="mt-2 space-y-1">{c.priorize.map((x) => <li key={x}>• {x}</li>)}</ul></div>
            <div><b>Reduza:</b><ul className="mt-2 space-y-1">{c.reduza.map((x) => <li key={x}>• {x}</li>)}</ul></div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function QuizPage() {
  const [answers, setAnswers] = useState({});
  const score = useMemo(() => quiz.reduce((s, item, i) => s + (answers[i] === item.answer ? 1 : 0), 0), [answers]);
  const complete = Object.keys(answers).length === quiz.length;
  return (
    <div className="grid gap-5">
      <Card><h1 className="text-3xl font-black text-slate-900">Quiz final</h1><p className="mt-2 text-slate-700">Teste rápido para fixar as ideias principais.</p></Card>
      {quiz.map((item, i) => (
        <Card key={item.q}>
          <h2 className="font-bold text-slate-900">{i + 1}. {item.q}</h2>
          <div className="mt-4 grid gap-2">
            {item.options.map((op, j) => {
              const selected = answers[i] === j;
              const answered = answers[i] !== undefined;
              const correct = j === item.answer;
              const cls = answered && selected ? (correct ? "bg-emerald-100 border-emerald-300 text-emerald-900" : "bg-rose-100 border-rose-300 text-rose-900") : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100";
              return <button key={op} onClick={() => setAnswers({ ...answers, [i]: j })} className={"text-left rounded-2xl border p-3 transition " + cls}>{op}</button>;
            })}
          </div>
          {answers[i] !== undefined && <p className="mt-3 text-sm text-slate-600"><b>Comentário:</b> {item.explain}</p>}
        </Card>
      ))}
      <Card className="bg-gradient-to-r from-emerald-50 to-sky-50"><div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"><div><h2 className="text-2xl font-black text-slate-900">Resultado: {score}/{quiz.length}</h2><p className="text-slate-700">{complete ? (score >= 6 ? "Muito bom!" : "Revise o guia e tente novamente.") : "Responda todas as perguntas para finalizar."}</p></div><Button variant="secondary" onClick={() => setAnswers({})}><RotateCcw size={18} /> Refazer</Button></div></Card>
    </div>
  );
}

function SummaryPage() {
  const handlePrint = () => {
    const printArea = document.getElementById("print-area");
    if (!printArea) return;

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Não foi possível abrir a janela de impressão. Verifique se o navegador bloqueou pop-ups.");
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Resumo do paciente</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #0f172a; }
            h1 { font-size: 28px; margin-bottom: 8px; }
            h2 { font-size: 18px; margin-bottom: 8px; }
            p { line-height: 1.5; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
            .box { border: 1px solid #e2e8f0; border-radius: 16px; padding: 14px; margin-top: 14px; }
            .green { background: #ecfdf5; }
            .red { background: #fff1f2; }
            .blue { background: #eff6ff; }
            .yellow { background: #fffbeb; }
            @media print { body { padding: 10mm; } }
          </style>
        </head>
        <body>
          ${printArea.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 300);
  };

  return (
    <div className="grid gap-5">
      <Card className="print:shadow-none print:border-0" id="print-area">
        <h1 className="text-3xl font-black text-slate-900">Resumo do paciente</h1>
        <p className="mt-2 text-slate-700">Guia alimentar para ajudar no cuidado da dor crônica.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-emerald-50 p-4"><h2 className="font-bold text-emerald-900">Priorize</h2><p className="mt-2 text-emerald-900">Frutas, verduras, legumes, feijão, aveia, ovos, peixe, frango, iogurte natural, azeite e água.</p></div>
          <div className="rounded-2xl bg-rose-50 p-4"><h2 className="font-bold text-rose-900">Reduza</h2><p className="mt-2 text-rose-900">Refrigerante, doces diários, ultraprocessados, embutidos, fast-food e álcool em excesso.</p></div>
          <div className="rounded-2xl bg-sky-50 p-4"><h2 className="font-bold text-sky-900">Lembre</h2><p className="mt-2 text-sky-900">Proteína ajuda músculos. Fibras ajudam intestino. Sono ruim piora dor.</p></div>
          <div className="rounded-2xl bg-amber-50 p-4"><h2 className="font-bold text-amber-900">Comece pequeno</h2><p className="mt-2 text-amber-900">Escolha 1 ou 2 mudanças por semana. Constância vence perfeição.</p></div>
        </div>
        <div className="mt-5 rounded-2xl border border-slate-200 p-4"><h2 className="font-bold text-slate-900">Minhas metas da semana</h2><div className="mt-3 space-y-3 text-slate-700"><div>☐ Beber mais água</div><div>☐ Comer 1 fruta por dia</div><div>☐ Incluir proteína no café da manhã</div><div>☐ Comer feijão ou aveia</div><div>☐ Aumentar verduras e legumes</div><div>☐ Comer menos ultraprocessados</div><div>☐ Reduzir refrigerante</div><div>☐ Reduzir doces frequentes</div><div>☐ Reduzir álcool em excesso</div><div>☐ Caminhar ou fazer exercício leve</div></div></div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-emerald-50 p-4 border border-emerald-100"><h2 className="font-bold text-emerald-900">Alimentos para aumentar</h2><div className="mt-3 space-y-2 text-emerald-900"><div>☐ frutas</div><div>☐ verduras e legumes</div><div>☐ feijão e lentilha</div><div>☐ aveia e fibras</div><div>☐ proteínas adequadas</div><div>☐ água</div></div></div>
          <div className="rounded-2xl bg-rose-50 p-4 border border-rose-100"><h2 className="font-bold text-rose-900">Alimentos para evitar ou reduzir</h2><div className="mt-3 space-y-2 text-rose-900"><div>☐ refrigerantes</div><div>☐ ultraprocessados</div><div>☐ excesso de açúcar</div><div>☐ álcool em excesso</div><div>☐ fast-food frequente</div><div>☐ embutidos</div></div></div>
        </div>
      </Card>
      <Button onClick={handlePrint}><Printer size={18} /> Imprimir resumo</Button>
    </div>
  );
}

function PageContent({ page, go }) {
  if (page.key === "home") return <HomePage go={go} />;
  if (page.key === "why") return <WhyPage />;
  if (page.key === "gut") return <GutPage />;
  if (page.key === "plate") return <PlatePage />;
  if (page.key === "protein") return <ProteinPage />;
  if (page.key === "fiber") return <FiberPage />;
  if (page.key === "avoid") return <AvoidPage />;
  if (page.key === "routine") return <RoutinePage />;
  if (page.key === "plan") return <PlanPage />;
  if (page.key === "conditions") return <ConditionsPage />;
  if (page.key === "quiz") return <QuizPage />;
  if (page.key === "summary") return <SummaryPage />;
  return null;
}

export default function App() {
  const [index, setIndex] = useState(0);
  const page = pages[index];
  const Icon = page.icon;
  const go = (i) => setIndex(Math.max(0, Math.min(pages.length - 1, i)));

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 print:bg-white">
      <style>{"@media print { body * { visibility: hidden; } #print-area, #print-area * { visibility: visible; } #print-area { position: absolute; left: 0; top: 0; width: 100%; } }"}</style>
      <div className="mx-auto max-w-6xl px-4 py-5 md:py-8">
        <header className="mb-5 rounded-3xl bg-white p-4 shadow-sm border border-slate-100 print:hidden">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700"><Icon size={24} /></div><div><div className="text-sm text-slate-500">Educação em dor</div><h1 className="font-black text-slate-900">{page.title}</h1></div></div>
            <div className="min-w-[240px]"><Progress index={index} /></div>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">{pages.map((p, i) => { const PIcon = p.icon; return <button key={p.key} onClick={() => go(i)} className={(i === index ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200") + " flex shrink-0 items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium transition"}><PIcon size={16} />{i + 1}</button>; })}</div>
        </header>
        <main className="min-h-[560px]"><PageContent page={page} go={go} /></main>
        <footer className="mt-5 flex items-center justify-between gap-3 print:hidden"><Button variant="secondary" onClick={() => go(index - 1)} disabled={index === 0}><ChevronLeft size={18} /> Voltar</Button><Button variant="ghost" onClick={() => go(0)}><Home size={18} /> Início</Button><Button onClick={() => go(index + 1)} disabled={index === pages.length - 1}>Próximo <ChevronRight size={18} /></Button></footer>
      </div>
    </div>
  );
}
