import HeadingAnimation from '@/components/common/heading-animation';
import QuestionAnswer from './question-answer';

const FrequentlyAskedQuestions = () => {
  return (
    <section className='container mx-auto py-8 px-3 sm:py-10'>
      <HeadingAnimation>
        <div className='pb-16'>
          <h1
            className='font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)] text-center'
          >
            Frequently Asked <span className='text-[var(--accent)]'>Questions</span>
          </h1>
        </div>
      </HeadingAnimation>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-h'>
        <QuestionAnswer />
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
