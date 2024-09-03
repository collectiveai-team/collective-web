# syntax=docker/dockerfile:1.3
FROM ubuntu:24.04 AS devcontainer

ENV EDITOR=vim
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
ENV DEBIAN_FRONTEND noninteractive

ARG NODEJS_VERSION=20

ARG USER_NAME=ubuntu

RUN apt-get update \
    && apt-get install -y sudo \
    && echo $USER_NAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USER_NAME \
    && chmod 0440 /etc/sudoers.d/$USER_NAME \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /tmp/* /var/tmp/* \
    && rm -rf /var/lib/apt/lists/*

ENV SHELL=/usr/bin/zsh
RUN chsh $USER_NAME -s $SHELL

# Install dev dependences & tools
RUN apt update && apt install -y \
    htop \
    vim \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    ssh \
    unzip \
    zsh \
    git \
    make \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /tmp/* /var/tmp/* \
    && rm -rf /var/lib/apt/lists/*



USER $USER_NAME
ENV USER_NAME=$USER_NAME
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# # nvm & nodejs
WORKDIR /home/$USER_NAME
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && nvm install ${NODEJS_VERSION} \
    && nvm alias default ${NODEJS_VERSION}

RUN echo 'export NVM_DIR="/home/${USER_NAME}/.nvm"' >> /home/${USER_NAME}/.zshrc \
    && echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> /home/${USER_NAME}/.zshrc \
    && echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> /home/${USER_NAME}/.zshrc
