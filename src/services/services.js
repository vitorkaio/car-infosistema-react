
const MSG_ERRORS = {
  board: 'Placa já cadastrada!',
  chassis: 'Chassi já cadastrado!',
  renavam: 'Renavam já cadastrado!',
}

export const formatErrors = (err) => {
  const lisErrsFormts = err.split(' ')
  if (lisErrsFormts.includes("E11000")) {
    if (lisErrsFormts.includes("board_1")) {
      return MSG_ERRORS.board
    }
    else if (lisErrsFormts.includes("chassis_1")) {
      return MSG_ERRORS.chassis
    }
    else if (lisErrsFormts.includes("renavam_1")) {
      return MSG_ERRORS.renavam
    }
  }
  return err
}
