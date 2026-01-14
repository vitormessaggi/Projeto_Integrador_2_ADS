package br.com.talisma.api.imoveisapi;

public class Animal {
    private String nome;
    private String especie;
    private int idade;

    public Animal(String nome, String especie, int idade) {
        this.setNome(nome);
        this.setEspecie(especie);
        this.setIdade(idade);
    }

    public Animal(String nome, String especie) {
        this.setNome(nome);
        this.setEspecie(especie);
        this.idade = 0;

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
