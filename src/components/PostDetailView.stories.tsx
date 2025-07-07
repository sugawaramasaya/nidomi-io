import type { Meta, StoryObj } from '@storybook/react';
import PostDetailView from './PostDetailView';
import { BookPost } from '@/types/bookPost';
import { Timestamp } from 'firebase/firestore';

const meta: Meta<typeof PostDetailView> = {
  title: 'Components/PostDetailView',
  component: PostDetailView,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PostDetailView>;

// サンプルデータ
const samplePost: BookPost = {
  id: '1',
  imageUrls: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  ],
  title: 'プログラミング学習の記録',
  comment: 'TypeScriptとReactの学習を始めました。まだまだ分からないことが多いですが、少しずつ理解が深まってきています。特にuseStateやuseEffectの使い方がポイントだと感じています。',
  tags: ['プログラミング', '学習', 'TypeScript', 'React'],
  userId: 'user123',
  createdAt: Timestamp.now(),
};

const multipleImagePost: BookPost = {
  id: '2',
  imageUrls: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop',
  ],
  title: 'デザイン制作のプロセス',
  comment: 'UI/UXデザインの勉強をしています。ユーザー体験を重視したデザインを心がけています。',
  tags: ['デザイン', 'UI', 'UX', 'Figma'],
  userId: 'user456',
  createdAt: Timestamp.now(),
};

const minimalPost: BookPost = {
  id: '3',
  imageUrls: [
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=400&fit=crop',
  ],
  title: '',
  comment: '',
  tags: [],
  userId: 'user789',
  createdAt: Timestamp.now(),
};

export const Default: Story = {
  args: {
    post: samplePost,
  },
};

export const MultipleImages: Story = {
  args: {
    post: multipleImagePost,
  },
};

export const Minimal: Story = {
  args: {
    post: minimalPost,
  },
};

export const LongContent: Story = {
  args: {
    post: {
      ...samplePost,
      title: '長いタイトルのテスト：プログラミング学習の記録とフロントエンド開発の体験談',
      comment: 'これは長いコメントのテストです。実際の投稿では、ユーザーが詳細な説明や体験談を書く場合があります。このような長いテキストでも適切に表示されるかを確認するためのサンプルです。改行やスペースも含めて、レイアウトが崩れないように注意深く設計する必要があります。特にモバイルデバイスでの表示を考慮することが重要です。',
      tags: ['プログラミング', '学習', 'TypeScript', 'React', 'フロントエンド', 'Web開発', '体験談', '初心者'],
    },
  },
};
