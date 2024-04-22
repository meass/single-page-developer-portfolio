"use strict";
const projectImg = document.querySelector('#project-img');
const projectTitle = document.querySelector('#project-title');
const projectLanguage = document.querySelector('#project-language');
const projectDemo = document.querySelector('#project-demo');
const projectGitHub = document.querySelector('#project-github');
window.onload = function () {
    fetch('/src/data.json')
        .then((response) => response.json())
        .then((data) => {
        const projects = data.projects;
        const container = document.getElementById('projectContainer');
        projects.forEach((project) => {
            const projectDetail = document.createElement('div');
            projectDetail.classList.add('project-detail');
            const projectImg = document.createElement('img');
            projectImg.id = 'project-img';
            projectImg.src = project.src;
            projectImg.alt = project.alt;
            const language = document.createElement('div');
            language.classList.add('language');
            const projectTitle = document.createElement('h3');
            projectTitle.className = 'project-title';
            projectTitle.innerHTML = project.title;
            language.appendChild(projectTitle);
            project.language.map((lang) => {
                const projectLanguage = document.createElement('span');
                projectLanguage.className = 'project-language';
                projectLanguage.innerHTML = lang;
                language.appendChild(projectLanguage);
            });
            const reference = document.createElement('div');
            reference.classList.add('reference');
            const projectDemo = document.createElement('a');
            projectDemo.id = 'project-demo';
            projectDemo.innerHTML = 'view project';
            projectDemo.href = project.demo;
            projectDemo.target = '_blank';
            const projectGithub = document.createElement('a');
            projectGithub.id = 'project-github';
            projectGithub.innerHTML = 'view code';
            projectGithub.href = project.github;
            projectGithub.target = '_blank';
            reference.appendChild(projectDemo);
            reference.appendChild(projectGithub);
            projectDetail.appendChild(projectImg);
            projectDetail.appendChild(language);
            projectDetail.appendChild(reference);
            container.appendChild(projectDetail);
        });
    })
        .catch((error) => {
        console.log(error);
    });
};
