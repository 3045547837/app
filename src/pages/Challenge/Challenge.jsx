import React, { useState } from 'react';
import './index.css';

const Challenge = () => {
  const [githubRepoUrl, setGithubRepoUrl] = useState('');
  const [vercelUrl, setVercelUrl] = useState('');
  // 新增错误信息状态
  const [errors, setErrors] = useState({
    githubRepoUrl: '',
    vercelUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // 校验 GitHub 仓库 URL
    if (!githubRepoUrl.trim()) {
      newErrors.githubRepoUrl = '请填写 GitHub 仓库 URL';
    } else if (!/^(https?:\/\/)?(www\.)?github\.com\/[\w-]+\/[\w-]+$/.test(githubRepoUrl)) {
      newErrors.githubRepoUrl = '请输入有效的 GitHub 仓库 URL';
    }
    // 校验 Vercel 在线体验地址
    if (!vercelUrl.trim()) {
      newErrors.vercelUrl = '请填写 Vercel 在线体验地址';
    } else if (!/^(https?:\/\/)?[\w-]+\.vercel\.app/.test(vercelUrl)) {
      newErrors.vercelUrl = '请输入有效的 Vercel 在线体验地址';
    }

    setErrors(newErrors);

    // 如果没有错误，提示提交成功
    if (Object.keys(newErrors).length === 0) {
      alert('作品已提交！');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">提交作品</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="url"
          placeholder="GitHub 仓库 URL"
          value={githubRepoUrl}
          onChange={(e) => setGithubRepoUrl(e.target.value)}
        />
        {/* 显示 GitHub 仓库 URL 错误信息 */}
        <div className="error-message-container">
          {errors.githubRepoUrl && <p className="error-message">{errors.githubRepoUrl}</p>}
        </div>
        <input
          className="input-field"
          type="url"
          placeholder="Vercel 在线体验地址"
          value={vercelUrl}
          onChange={(e) => setVercelUrl(e.target.value)}
        />
        {/* 显示 Vercel 在线体验地址错误信息 */}
        <div className="error-message-container">
          {errors.vercelUrl && <p className="error-message">{errors.vercelUrl}</p>}
        </div>
        <button className="submit-button" type="submit">提交作品</button>
      </form>
    </div>
  );
};

export default Challenge;