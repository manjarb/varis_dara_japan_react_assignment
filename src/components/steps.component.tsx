export interface Step {
  title: string;
  order: number;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
}

export default function Steps(props: StepsProps) {
  const { steps, currentStep } = props;

  return (
    <ul className="steps">
      {steps.map(({ title, order }) => (
        <li
          key={`step-${order}`}
          className={`step ${currentStep === order ? "step-primary" : ""}`}
        >
          {title}
        </li>
      ))}
    </ul>
  );
}
