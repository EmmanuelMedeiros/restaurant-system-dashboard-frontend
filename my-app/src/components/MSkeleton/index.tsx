import React from 'react';
import { Skeleton, type SkeletonProps } from 'antd';
import './styles.scss'

interface MSkeletonProps extends SkeletonProps {
  avatar: boolean,
  size: number
}

const MSkeleton: React.FC<MSkeletonProps> = (MSkeletonProps) => {
  return (
    <>
      {!MSkeletonProps.avatar&& <Skeleton {...MSkeletonProps} active={true}/>}
      {MSkeletonProps.avatar && <Skeleton.Avatar active={true} shape='circle' size={MSkeletonProps.size}/>}
    </>
  )
};

export { MSkeleton };

export default Skeleton;
