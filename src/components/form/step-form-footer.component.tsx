import Button from "../button.component";

interface StepFormFooterProps {
  isShowPrevious?: boolean;
  isShowNext?: boolean;
  nextButtonType?: string;
  nextButtonText?: string;
  onNextButtonClick?: () => void;
  onPreviousClick?: () => void;
}

export default function StepFormFooter({
  isShowPrevious = true,
  isShowNext = true,
  nextButtonType = "submit",
  nextButtonText = "Next",
  onNextButtonClick,
  onPreviousClick = () => {},
}: StepFormFooterProps) {
  return (
    <div className="flex flex-row-reverse justify-between">
      {isShowNext &&
        (onNextButtonClick ? (
          <Button
            buttonType={nextButtonType as any}
            text={nextButtonText}
            onClick={onNextButtonClick}
          />
        ) : (
          <Button buttonType={nextButtonType as any} text={nextButtonText} />
        ))}
      {isShowPrevious && (
        <Button
          buttonType="button"
          text="Previous"
          buttonStyle="warning"
          onClick={onPreviousClick}
        />
      )}
    </div>
  );
}
