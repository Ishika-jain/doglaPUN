from fastapi import FastAPI
from pydantic import BaseModel
from class2 import predictDisease

app = FastAPI()

class ScoringPoint(BaseModel):
   symptoms : str

@app.post('/')
async def scoring_endpoint(item : ScoringPoint):
    #print(item.symptoms)
    return predictDisease(item.symptoms)