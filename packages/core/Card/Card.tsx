import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  imageHeight?: number | string;
  imageFit?: 'cover' | 'contain' | 'fill';
  footer?: React.ReactNode;
  onClick?: () => void;
  variant?: 'elevated' | 'outlined' | 'flat';
  hoverable?: boolean;
  loading?: boolean;
  headerAction?: React.ReactNode;
  fullWidth?: boolean;
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const CardImage = styled.img<{ $height?: string | number; $fit?: string }>`
  width: 100%;
  height: ${props => typeof props.$height === 'number' ? `${props.$height}px` : props.$height || '200px'};
  object-fit: ${props => props.$fit || 'cover'};
  display: block;
`;

const LoadingOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f4f6;
  border-radius: 50%;
  border-top-color: #3b82f6;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
const CardBody = styled.div`
  padding: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const ActionWrapper = styled.div`
  margin-left: 16px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;
`;

const CardFooter = styled.div`
  padding: 16px 20px;
  background-color: #f9fafb;
  border-top: 1px solid #f3f4f6;
`;
const StyledCard = styled.div<{
  $variant?: string;
  $hoverable?: boolean;
  $loading?: boolean;
  $fullWidth?: boolean;
}>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  opacity: ${props => props.$loading ? 0.7 : 1};

  ${props => {
    switch (props.$variant) {
      case 'outlined':
        return `
          border: 1px solid #e5e7eb;
          ${props.$hoverable && `
            &:hover {
              border-color: #3b82f6;
              transform: translateY(-4px);
            }
          `}
        `;
      case 'flat':
        return `
          background-color: #f9fafb;
          ${props.$hoverable && `
            &:hover {
              background-color: #f3f4f6;
            }
          `}
        `;
      default:
        return `
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          ${props.$hoverable && `
            &:hover {
              transform: translateY(-4px);
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
          `}
        `;
    }
  }}
`;
const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  imageHeight,
  imageFit,
  footer,
  onClick,
  variant = 'elevated',
  hoverable = true,
  loading = false,
  headerAction,
  fullWidth
}) => {
  return (
    <StyledCard 
      onClick={onClick}
      $variant={variant}
      $hoverable={hoverable}
      $loading={loading}
      $fullWidth={fullWidth}
    >
      {loading ? (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      ) : (
        <>
          {imageUrl && (
            <ImageWrapper>
              <CardImage 
                src={imageUrl} 
                alt={imageAlt || title} 
                $height={imageHeight}
                $fit={imageFit}
              />
            </ImageWrapper>
          )}
          <CardBody>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              {headerAction && <ActionWrapper>{headerAction}</ActionWrapper>}
            </CardHeader>
            <CardDescription>{description}</CardDescription>
          </CardBody>
          {footer && <CardFooter>{footer}</CardFooter>}
        </>
      )}
    </StyledCard>
  );
};
export default Card;