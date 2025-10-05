# 🧠 Early Alzheimer’s Detection Using Handwriting Analysis with Machine Learning

![Python](https://img.shields.io/badge/Python-3.10-blue?logo=python)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![scikit-learn](https://img.shields.io/badge/scikit--learn-ML%20Pipeline-orange)
![Status](https://img.shields.io/badge/Status-Completed-success)

---

## 📘 Overview

This project focuses on **early detection of Alzheimer’s disease** through handwriting analysis using **machine learning (ML)**.  
It analyzes subtle handwriting traits—such as pressure, velocity, and stroke smoothness—to identify early cognitive decline.

Using the **DARWIN dataset**, this system integrates **feature selection** (ANOVA, RFECV, PCA) and **ensemble models** (Stacking & Voting Classifiers) to achieve **up to 100% accuracy**.  
A **Flask-based web app** provides a secure, real-time interface for Alzheimer’s prediction through CSV upload.

---

## 🧩 Key Features

- 📂 Automated data loading, preprocessing, and visualization  
- 🧹 Feature selection using **ANOVA**, **RFECV**, and **PCA**  
- ⚙️ ML models: SVM, Random Forest, Neural Network, XGBoost  
- 🤖 Ensemble models: Stacking + Voting Classifiers  
- 📊 Evaluation via Repeated K-Fold & Monte Carlo CV  
- 🌐 Flask web interface with **OTP authentication**  
- 💾 Model persistence (`.pkl` files) for deployment  

---

## 🗂️ Project Structure

```
Early-Alzheimers-Detection/
│
├── data.py                          # Fetch DARWIN dataset from UC Irvine ML Repository
├── load_dataset.py                  # Load and inspect dataset
├── preprocess_dataset.py            # Data cleaning, encoding, scaling, PCA
├── split_dataset.py                 # Train-test split
├── train_advanced_ml_models.py      # Train & evaluate models
├── import_libraries.py              # Library import check
│
├── datasets/
│   ├── darwin.csv
│   ├── feature_selected_darwin.csv
│   ├── final_anova_darwin.csv
│   ├── final_rfecv_darwin.csv
│   └── final_pca_darwin.csv
│
├── models/
│   ├── anova_svm.pkl
│   ├── rfecv_random forest.pkl
│   ├── pca_neural network.pkl
│   └── ...
│
└── GRAD_700_Final_Report_Pavana_Manjunath.pdf   # Full academic report
```

---

## ⚙️ Execution Workflow

### **1️⃣ Data Fetching**
```bash
python data.py
```
Fetches the DARWIN handwriting dataset from the UCI ML Repository.

### **2️⃣ Data Inspection**
```bash
python load_dataset.py
```
Displays dataset info, missing values, and basic structure.

### **3️⃣ Preprocessing**
```bash
python preprocess_dataset.py
```
- Encodes target column  
- Removes highly correlated features (>0.95)  
- Scales data  
- Applies **PCA (95% variance retained)**  

### **4️⃣ Dataset Splitting**
```bash
python split_dataset.py
```
Splits data into 80% training and 20% testing sets.

### **5️⃣ Model Training**
```bash
python train_advanced_ml_models.py
```
Trains **SVM**, **Random Forest**, and **Neural Network** models on ANOVA, RFECV, and PCA feature sets.  
Evaluates accuracy using Repeated K-Fold and Monte Carlo CV.

### **6️⃣ Model Saving**
Trained models are serialized as `.pkl` files and saved to `/models`.

---

## 🧠 Machine Learning Models

| Model Type | Technique | Description |
|-------------|------------|--------------|
| **SVM** | Linear Kernel | Robust in high-dimensional feature space |
| **Random Forest** | Bagging Ensemble | Reduces overfitting and improves accuracy |
| **Neural Network (MLP)** | Deep Feedforward NN | Captures nonlinear handwriting patterns |
| **Stack Model** | RF + ET + GNB | Combines strengths of diverse models |
| **Voting Classifier** | RF + DT | Achieved **100% accuracy** (ANOVA features) |

---

## 📈 Results Summary

| Feature Selection | Best Model | Accuracy |
|--------------------|-------------|-----------|
| ANOVA | Voting Classifier (RF + DT) | **100%** |
| RFECV | Stacking Classifier | 97.8% |
| PCA | Neural Network | 94.5% |

---

## 🧪 Evaluation Metrics

- Accuracy  
- Precision  
- Recall  
- F1-Score  
- ROC-AUC  
- Cohen’s Kappa  
- Matthews Correlation Coefficient (MCC)

---

## 🧰 Technologies Used

| Category | Tools / Libraries |
|-----------|------------------|
| **Language** | Python 3.10 |
| **ML Frameworks** | scikit-learn, XGBoost |
| **Data Handling** | pandas, NumPy |
| **Visualization** | matplotlib, seaborn |
| **Web Framework** | Flask |
| **Serialization** | joblib |
| **Dataset** | DARWIN (Diagnosis Alzheimer’s with Handwriting) |

---

## 🌐 Flask Web Application (Extension)

- Secure OTP-based login  
- Upload handwriting CSV data  
- Real-time Alzheimer’s prediction  
- Visualization dashboard for clinicians  

---

## 🧭 Future Enhancements

- Integration of **speech and facial data** for multimodal diagnosis  
- **Mobile handwriting tracking app** for real-time screening  
- Integration of **Explainable AI (XAI)** for transparency  
- EHR system integration for clinical workflow  

---

## 👩‍💻 Author

**Pavana Manjunath**  
M.S. in Computer Science — California State University, Fullerton  
📧 [pavanamanjunath@csu.fullerton.edu](mailto:pavanamanjunath@csu.fullerton.edu)  

**Shashank Reddy Annarapu**  
M.S. in Computer Science — California State University, Fullerton  
📧 [reddyshareddy@csu.fullerton.edu](mailto:reddyshareddy@csu.fullerton.edu)  

---

## 📚 References

- Shaffi et al. (2024) — *Performance Evaluation of ML Methods for Alzheimer’s Detection*  
- Öcal (2024) — *Triple Ensemble Learning Model for Handwriting-based AD Detection*  
- Impedovo et al. (2023) — *Handwriting Task-Selection for Alzheimer Dataset Analysis*  
- Viswan et al. (2024) — *Explainable AI in Alzheimer’s Disease Classification*  
---

## 📜 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it for educational or research purposes.

---

⭐ **If you find this project useful, consider giving it a star!**
