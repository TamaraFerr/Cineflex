import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function() {
    return (
        <>
            Nome do Comprador:
            <input placeholder="Digite seu nome..." data-test="client-name"/>

            CPF do Comprador:
            <input placeholder="Digite seu CPF..." data-test="client-cpf"/>

            <Link to={`/sucesso`}>
                <button data-test="book-seat-btn">Reservar Assento(s)</button>
            </Link>
        </>
    )
}

