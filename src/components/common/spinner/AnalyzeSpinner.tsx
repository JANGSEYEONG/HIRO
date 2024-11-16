import styles from './AnalyzeSpinner.module.css';
interface AnalyzeSpinnerProps {
  className?: string;
}
const AnalyzeSpinner = ({ className }: AnalyzeSpinnerProps) => {
  return (
    <div className={className}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default AnalyzeSpinner;
