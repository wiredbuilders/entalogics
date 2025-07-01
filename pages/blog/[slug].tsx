import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { blogPosts, BlogPost as BlogPostType } from '../../src/data/blogData';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === slug);

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post?.category && p.slug !== slug)
    .slice(0, 3);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#0d0d0d] dark:to-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Post Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#512feb] text-white font-semibold rounded-xl hover:bg-[#4a2bd4] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#0d0d0d] dark:to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#512feb]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#512feb] font-semibold hover:gap-3 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-[#512feb]/10 text-[#512feb] border border-[#512feb]/20">
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="relative pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:dark:text-white prose-p:text-gray-600 prose-p:dark:text-gray-300 prose-strong:text-gray-900 prose-strong:dark:text-white prose-ul:text-gray-600 prose-ul:dark:text-gray-300 prose-li:text-gray-600 prose-li:dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="relative py-20 bg-white/50 dark:bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Related Articles
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Continue reading more insights from our team
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white/70 dark:bg-black/60 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-[#512feb] transition-colors duration-200">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center gap-2 text-[#512feb] font-semibold text-sm hover:gap-3 transition-all duration-200"
                      >
                        Read More
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default BlogPost; 