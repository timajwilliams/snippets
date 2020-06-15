---
title: Correlation Scoring
tags:
  - scoring, sklearn, python
emoji: 📈
---

Custom Scorer for use in sklearn gridsearch - calculate correlation between true y series and predicted series

```python
from scipy.stats import spearmanr
from sklearn.metrics import make_scorer

def try_spearmanr(i, j):
    try:
        return spearmanr(i, j)[0]
    except:
        return 0
    
scorer = make_scorer(try_spearmanr)
```
