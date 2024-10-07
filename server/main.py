from typing import Union

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/fitems")
def read_item():
    return {
        "items" : [
            {
                "id": 1,
                "name": "Pencil",
                "amount": 100,
                "image_url": "https://media.allonline.7eleven.co.th/pdmain/357812_01_pencil_yoya.jpg"
            },
            {
                "id": 2,
                "name": "Marker",
                "amount": 50,
                "image_url": "https://www.dealtique.com/image/cache/catalog/Items/S0025-6-1000x1000w.jpg"
            },
            {
                "id": 3,
                "name": "Eraser",
                "amount": 200,
                "image_url": "https://down-th.img.susercontent.com/file/dd32d263b8ceb89f533682348594b66b"
            },
            {
                "id": 4,
                "name": "Ruler",
                "amount": 75,
                "image_url": "https://inwfile.com/s-ge/0x4m3q.jpg"
            },
            {
                "id": 5,
                "name": "Stapler",
                "amount": 30,
                "image_url": "https://www.bbblogr.com/wp-content/uploads/2016/02/Zenith-Plier-Stapler-520-25.jpg"
            },
            {
                "id": 6,
                "name": "Scissors",
                "amount": 45,
                "image_url": "https://down-th.img.susercontent.com/file/8d1527c9dd73a6b99d11fd2bcdabdf0f"
            }
        ]       
    }