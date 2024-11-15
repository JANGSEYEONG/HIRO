'use client';
import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

interface ErrorHandlingWrapperProps {
  children: React.ReactNode;
  suspenseFallback: React.ReactNode;
  errorFallbackMessage: string;
  errorClassName?: string;
}

const ErrorHandlingWrapper = ({
  children,
  suspenseFallback,
  errorFallbackMessage,
  errorClassName,
}: ErrorHandlingWrapperProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackMessage={errorFallbackMessage}
          fallbackClassName={errorClassName}>
          <Suspense fallback={suspenseFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ErrorHandlingWrapper;
