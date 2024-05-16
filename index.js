const blackPawn = document.querySelectorAll(`.blackpawn`);

let blackPawnImage = document.createElement( "img" );
blackPawnImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIc7AADTi1OUHxPC5RsC-_NNamaBD20fn92mhnibErj1MXVo6JfLH1Kja6S025bnzO-Ck&usqp=CAU'
blackPawnImage.alt = 'black-pawns'
blackPawnImage.style = "width: 100%; height: 100%"

blackPawn.forEach((pawn)=> pawn.addEventListener("mouseover", function () {
    pawn.appendChild(blackPawnImage);
})) 
blackPawn.forEach((pawn)=> pawn.addEventListener("mouseleave", function () {
    pawn.removeChild(blackPawnImage);
})) 


const whitePawn = document.querySelectorAll(`.whitepawn`);

let whitePawnImage = document.createElement( "img" );
whitePawnImage.src = 'https://media.istockphoto.com/id/172193198/photo/white-pawn.jpg?s=612x612&w=0&k=20&c=pF49e_J1h7cAypgjCMntZ0lbav7P-PWKg13077j7q_w='
whitePawnImage.alt = 'white-pawns'
whitePawnImage.style = "width: 100%; height: 100%"

whitePawn.forEach((pawn)=> pawn.addEventListener("mouseover", function () {
    pawn.appendChild(whitePawnImage);
})) 
whitePawn.forEach((pawn)=> pawn.addEventListener("mouseleave", function () {
    pawn.removeChild(whitePawnImage);
})) 


const blackRook = document.querySelectorAll(`.blackrook`);

let blackRookImage = document.createElement( "img" );
blackRookImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDf8-D_V9fHqBO6ZPx1LyQKQf9u54aaGx_g&usqp=CAU'
blackRookImage.alt = 'black-rooks'
blackRookImage.style = "width: 100%; height: 100%"

blackRook.forEach((pawn)=> pawn.addEventListener("mouseover", function () {
    pawn.appendChild(blackRookImage);
})) 
blackRook.forEach((pawn)=> pawn.addEventListener("mouseleave", function () {
    pawn.removeChild(blackRookImage);
})) 


const whiteRook = document.querySelectorAll(`.whiterook`);

let whiteRookImage = document.createElement( "img" );
whiteRookImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8Xwpu55L9hDTkd53pU170U8UoprHb7FQEA&usqp=CAU'
whiteRookImage.alt = 'white-rooks'
whiteRookImage.style = "width: 100%; height: 100%"

whiteRook.forEach((pawn)=> pawn.addEventListener("mouseover", function () {
    pawn.appendChild(whiteRookImage);
})) 
whiteRook.forEach((pawn)=> pawn.addEventListener("mouseleave", function () {
    pawn.removeChild(whiteRookImage);
})) 


const blackKnight = document.querySelectorAll(`.blackKnight`);

let blackKnightImage = document.createElement( "img" );
blackKnightImage.src = 'data:image/png;base64,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'
blackKnightImage.alt = 'black-knight'
blackKnightImage.style = "width: 100%; height: 100%"

blackKnight.forEach((pawn)=> pawn.addEventListener("mouseover", function () {
    pawn.appendChild(blackKnightImage);
})) 
blackKnight.forEach((pawn)=> pawn.addEventListener("mouseleave", function () {
    pawn.removeChild(blackKnightImage);
})) 


const whiteKnight = document.querySelectorAll(`.whiteknight`);

let whiteKnightImage = document.createElement( "img" );
whiteKnightImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9RHKho4uqIPS_WkIj8UfPIKE1K1bttym4A&usqp=CAU'
whiteKnightImage.alt = 'white-knight'
whiteKnightImage.style = "width: 100%; height: 100%"

whiteKnight.forEach((pawn)=> pawn.addEventListener("mouseover", function () {
    pawn.appendChild(whiteKnightImage);
})) 
whiteKnight.forEach((pawn)=> pawn.addEventListener("mouseleave", function () {
    pawn.removeChild(whiteKnightImage);
})) 


const blackBishop = document.querySelectorAll(`.blackbishop`);

let blackBishopImage = document.createElement( "img" );
blackBishopImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLuCz4oogZAPjsiM3Ajh3WdSqIYKEYlyxfw&usqp=CAU'
blackBishopImage.alt = 'black-bishop'
blackBishopImage.style = "width: 100%; height: 100%"

blackBishop.forEach((pawn)=> pawn.addEventListener("mouseover", function () {
    pawn.appendChild(blackBishopImage);
})) 
blackBishop.forEach((pawn)=> pawn.addEventListener("mouseleave", function () {
    pawn.removeChild(blackBishopImage);
})) 


const whiteBishop = document.querySelectorAll(`.whitebishop`);

let whiteBishopImage = document.createElement( "img" );
whiteBishopImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgBwAGw2c9ke6u4LpuyVQRQES6QvUIi1J7w&usqp=CAU'
whiteBishopImage.alt = 'white-bishop'
whiteBishopImage.style = "width: 100%; height: 100%"

whiteBishop.forEach((pawn)=> pawn.addEventListener("mouseover", function () {
    pawn.appendChild(whiteBishopImage);
})) 
whiteBishop.forEach((pawn)=> pawn.addEventListener("mouseleave", function () {
    pawn.removeChild(whiteBishopImage);
})) 


const blackQueen = document.querySelector(`.blackqueen`);

let blackQueenImage = document.createElement( "img" );
blackQueenImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFCJDOel6InqOOJ9d03Ew89AGybZcZI9Vmg&usqp=CAU'
blackQueenImage.alt = 'black-queen'
blackQueenImage.style = "width: 100%; height: 100%"

blackQueen.addEventListener("mouseover", function () {
    blackQueen.appendChild(blackQueenImage);
})
blackQueen.addEventListener("mouseleave", function () {
    blackQueen.removeChild(blackQueenImage);
})


const whiteQueen = document.querySelector(`.whitequeen`);

let whiteQueenImage = document.createElement( "img" );
whiteQueenImage.src = 'data:image/jpeg;base64,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'
whiteQueenImage.alt = 'white-queen'
whiteQueenImage.style = "width: 100%; height: 100%"

whiteQueen.addEventListener("mouseover", function () {
    whiteQueen.appendChild(whiteQueenImage);
})
whiteQueen.addEventListener("mouseleave", function () {
    whiteQueen.removeChild(whiteQueenImage);
})


const blackKing = document.querySelector(`.blackking`);

let blackKingImage = document.createElement( "img" );
blackKingImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQro2IH8jKh9a54UMIPE1yDtIHlTWooo2X9iA&usqp=CAU'
blackKingImage.alt = 'black-king'
blackKingImage.style = "width: 100%; height: 100%"

blackKing.addEventListener("mouseover", function () {
    blackKing.appendChild(blackKingImage);
})
blackKing.addEventListener("mouseleave", function () {
    blackKing.removeChild(blackKingImage);
})


const whiteKing = document.querySelector(`.whiteking`);

let whiteKingImage = document.createElement( "img" );
whiteKingImage.src = 'data:image/jpeg;base64,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'
whiteKingImage.alt = 'white-king'
whiteKingImage.style = "width: 100%; height: 100%"

whiteKing.addEventListener("mouseover", function () {
    whiteKing.appendChild(whiteKingImage);
})
whiteKing.addEventListener("mouseleave", function () {
    whiteKing.removeChild(whiteKingImage);
})