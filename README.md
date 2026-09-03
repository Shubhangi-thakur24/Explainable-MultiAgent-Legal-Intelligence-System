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

```

## Project Implementation Roadmap

```text
┌──────────────────────────────────────────────────────────────┐
│                ROADMAP                    │
└──────────────────────────────────────────────────────────────┘

01  FOUNDATION
    Repository • Architecture • Environment • Configuration
                              │
                              ▼
02  DATA ENGINEERING
    Dataset Collection • Cleaning • Annotation • Preprocessing
                              │
                              ▼
03  DOCUMENT INTELLIGENCE
    OCR • PDF/Image Processing • Language Detection
                              │
                              ▼
04  LEGAL NLP
    Classification • Multi-label Classification
    Legal NER • Relationship & Citation Extraction
                              │
                              ▼
05  INTELLIGENT RETRIEVAL
    Multilingual Embeddings • Vector Search
    BM25 • Hybrid Retrieval • Reranking
                              │
                              ▼
06  RAG ENGINE
    Query Processing • Context Retrieval
    Grounded Generation • Citation Generation
                              │
                              ▼
07  KNOWLEDGE GRAPH
    Legal Entities • Relationships
    Case/Provision Graph • Graph Retrieval
                              │
                              ▼
08  MULTI-AGENT INTELLIGENCE
    Legal Researcher • Similar Case Agent
    Research Scholar • Senior Lawyer
    Evidence Verifier • Legal Editor
                              │
                              ▼
09  EXPLAINABILITY
    Evidence Tracing • Source Attribution
    Reasoning Transparency • Confidence Signals
                              │
                              ▼
10  APPLICATION LAYER
    FastAPI • Authentication • RBAC
    React Interface • Case Management
                              │
                              ▼
11  VALIDATION
    Unit Testing • Integration Testing
    ML Evaluation • RAG Evaluation • End-to-End Testing
                              │
                              ▼
12  PRODUCTION
    Docker • Azure • Microsoft Foundry
    Model Serving • Monitoring • Cost Optimization
                              │
                              ▼
                    PRODUCTION-READY
                 LEGAL AI PLATFORM
```
## Conclusion

Explainable Bilingual Legal Intelligence aims to provide a practical, evidence-grounded AI system for multilingual legal research and case analysis. By combining Legal NLP, OCR, hybrid RAG, Knowledge Graphs, semantic retrieval, and multi-agent reasoning, the platform is designed to improve legal information discovery while maintaining transparency through evidence and citations.

## Contribution

The project contributes an integrated architecture for **Hindi-English legal intelligence** that combines document understanding, legal entity and provision extraction, similar-case retrieval, academic research discovery, Knowledge Graph reasoning, and explainable multi-agent analysis. It also demonstrates a production-oriented approach to deploying fine-tuned legal AI models efficiently on Azure while using on-demand inference and cost-aware infrastructure.
