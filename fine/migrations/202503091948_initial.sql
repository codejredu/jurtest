-- Initial migration for the Kids Coding App database

-- Table for storing user information
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    avatar VARCHAR(255),
    progress JSONB DEFAULT '{}'::JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing projects created by users
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    character JSONB DEFAULT '{}'::JSONB,
    background JSONB DEFAULT '{}'::JSONB,
    sounds JSONB DEFAULT '[]'::JSONB,
    blocks JSONB DEFAULT '[]'::JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing coding blocks
CREATE TABLE blocks (
    id SERIAL PRIMARY KEY,
    project_id INT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    type VARCHAR(255) NOT NULL,
    properties JSONB DEFAULT '{}'::JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing characters
CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    animations JSONB DEFAULT '[]'::JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing sounds
CREATE TABLE sounds (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    file_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for tracking user achievements (badges, milestones, etc.)
CREATE TABLE achievements (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing pre-built projects (templates)
CREATE TABLE prebuilt_projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    character JSONB DEFAULT '{}'::JSONB,
    background JSONB DEFAULT '{}'::JSONB,
    sounds JSONB DEFAULT '[]'::JSONB,
    blocks JSONB DEFAULT '[]'::JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing tutorials
CREATE TABLE tutorials (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    steps JSONB DEFAULT '[]'::JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for optimizing queries
CREATE INDEX idx_users_name ON users(name);
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_blocks_project_id ON blocks(project_id);
CREATE INDEX idx_achievements_user_id ON achievements(user_id);
