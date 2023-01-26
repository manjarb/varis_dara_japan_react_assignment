import Button from "../button.component";

interface StepFormFooterProps {
  isShowPrevious?: boolean;
  isShowNext?: boolean;
  onPreviousClick?: () => void;
}

export default function StepFormFooter({
  isShowPrevious = true,
  isShowNext = true,
  onPreviousClick = () => {}
}: StepFormFooterProps) {
  return (
    <div className="flex flex-row-reverse justify-between">
      {isShowNext && <Button buttonType="submit" text="Next" />}
      {isShowPrevious && (
        <Button buttonType="button" text="Previous" buttonStyle="warning" onClick={onPreviousClick} />
      )}
    </div>
  );
}
