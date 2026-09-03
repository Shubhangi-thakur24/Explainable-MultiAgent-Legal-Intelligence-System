# Explainable Bilingual Legal Intelligence

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11+-3776AB?logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/PyTorch-ML-EE4C2C?logo=pytorch&logoColor=white"/>
  <img src="https://img.shields.io/badge/HuggingFace-Transformers-FFD21E?logo=huggingface&logoColor=black"/>
  <img src="https://img.shields.io/badge/Qdrant-Vector_DB-DC244C?logo=qdrant&logoColor=white"/>
  <img src="https://img.shields.io/badge/Neo4j-Knowledge_Graph-4581C3?logo=neo4j&logoColor=white"/>
  <img src="https://img.shields.io/badge/LangGraph-Multi--Agent-1C3C3C"/>
  <img src="https://img.shields.io/badge/Docker-Containerization-2496ED?logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Azure-Deployment-0078D4?logo=microsoftazure&logoColor=white"/>
</p>

<p align="center">
  <b>Explainable Bilingual Multi-Agent Legal Intelligence Platform</b><br/>
  Hindi • English • Hinglish | OCR • Legal NLP • RAG • Knowledge Graph • Generative AI
</p>

---

## Overview

**Explainable Bilingual Legal Intelligence** is an AI-powered legal research and case-analysis platform for understanding **Hindi, English, and mixed Hindi-English legal documents**.

It processes judgments, petitions, FIRs, affidavits, and related documents using **OCR, multilingual NLP, XLM-RoBERTa, DistilBERT, semantic search, RAG, Knowledge Graphs, Generative AI, and Multi-Agent AI** to extract legal information, identify provisions and entities, retrieve relevant evidence and similar cases, recommend research papers, and generate **grounded, explainable legal intelligence with source citations**.

## Problem Statement

Legal professionals and researchers face large volumes of multilingual, scanned, and complex legal documents. Conventional keyword search and generic LLM systems often struggle with legal terminology, multilingual context, precedent relationships, evidence grounding, and reliable source attribution.

This project addresses these challenges through:

**Legal NLP + Hybrid RAG + Knowledge Graphs + Multi-Agent Reasoning + Explainability**

## Key Features

- Hindi, English, and Hinglish legal document understanding
- OCR and preprocessing for scanned legal documents
- Legal document classification
- Multi-label legal provision classification
- Legal Named Entity Recognition and relationship extraction
- Multilingual semantic embeddings
- Hybrid vector + keyword retrieval
- Knowledge Graph-based legal reasoning
- Retrieval-Augmented Generation
- Similar legal case retrieval
- Related research-paper recommendation
- Evidence-grounded responses with citations
- Explainable legal analysis
- Multi-agent legal research and case analysis
- Interactive courtroom simulation
- Authentication, RBAC, and case-level data isolation

## System Architecture

<p align="center">
  <img src="docs/architecture/system-architecture.png" alt="System Architecture" width="100%"/>
</p>

```text
                              USER
                                │
                                ▼
                       React Web Application
                                │
                                ▼
                         FastAPI Backend
                                │
                 ┌──────────────┼──────────────┐
                 ▼              ▼              ▼
             Auth/RBAC      Case Manager   Document Manager
                                │
                                ▼
                    OCR + Document Processing
                                │
                                ▼
                    Multilingual Legal NLP
                                │
                 ┌──────────────┼──────────────┐
                 ▼              ▼              ▼
           Classification       NER       Relationships
                 │              │              │
                 └──────────────┼──────────────┘
                                ▼
                       Knowledge & Retrieval
                          ┌─────┴─────┐
                          ▼           ▼
                        Qdrant      Neo4j
                          └─────┬─────┘
                                ▼
                    Hybrid Retrieval + Reranking
                                │
                                ▼
                         Multi-Agent Layer
                                │
              ┌─────────────────┼─────────────────┐
              ▼                 ▼                 ▼
       Legal Researcher   Research Scholar   Similar Case Agent
              └─────────────────┼─────────────────┘
                                ▼
                         Senior Lawyer
                                │
                                ▼
                     Evidence Verification
                                │
                                ▼
                    Explainable RAG Response
