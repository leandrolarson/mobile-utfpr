import { useState, useEffect } from "react";
import { View, StyleSheet, Image, Alert, Switch, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

export default function FormScreen() {
  // REQUISITO 6: Gerenciamento de Estado (useState).
  // Controlando pelo menos 3 campos de entrada e a visibilidade dos erros.
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movieGenre, setMovieGenre] = useState("");

  const [receiveNotifications, setReceiveNotifications] = useState(false);

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Estados para as mensagens de erro (Req 6)
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genreError, setGenreError] = useState("");

  // REQUISITO 2: Ciclo de Vida (loading simulado).
  // useEffect que exibe o aviso e some após a tela ser montada (timeout de 2s).
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); // <-- Array vazio garante que execute apenas na montagem

  // REQUISITO 9: Efeito de Monitoramento (useEffect).
  // Monitora os campos e habilita/desabilita o botão de submissão com base nas regras.
  useEffect(() => {
    const isValidName = name.trim().length >= 3;
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidGenre = movieGenre.trim().length > 3;

    // Atualiza os estados de erro (Req 5 e 6)
    setNameError(
      name.length > 0 && !isValidName ? "Mínimo de 3 caracteres." : "",
    );
    setEmailError(email.length > 0 && !isValidEmail ? "E-mail inválido." : "");
    setGenreError(
      movieGenre.length > 0 && !isValidGenre ? "Campo obrigatório." : "",
    );

    // Controla o botão
    if (isValidName && isValidEmail && isValidGenre) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [name, email, movieGenre]); // <-- Array de dependências monitorando os campos

  // REQUISITO 10: Ação de Submissão (log onSubmit).
  // Exibe log no console com todos os valores, incluindo o Switch.
  const handleSubmeter = () => {
    const formatedDate = dayjs().format("YYYY-MM-DD HH:mm:ss");

    const formData = {
      userName: name,
      userEmail: email,
      favoriteGenre: movieGenre,
      notification: receiveNotifications, // O valor do Switch no log
      submissionStatus: "PENDING REVIEW",
    };

    console.log(`\n[LOG] ${formatedDate} - Form Submission Successful!`);
    console.log(JSON.stringify(formData, null, 2));

    Alert.alert("Sucesso!", `Formulário enviado com sucesso!`);
  };

  // Interceptador para o REQUISITO 2 (Aviso "Sistema Carregado...")
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
        }}
      >
        <View style={styles.loading}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Sistema Carregado...
          </Text>
          <Ionicons name="battery-full" size={24} color="black" />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* REQUISITO 3: Identidade Visual (Image) */}
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      {/* Utilizando o componente customizado criado no REQUISITO 4 */}
      <FormInput
        label="Nome"
        placeholder="Digite seu nome completo"
        value={name}
        onChangeText={setName}
        error={nameError}
      />

      <FormInput
        label="Email"
        placeholder="exemplo@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        error={emailError}
      />

      <FormInput
        label="Gênero de Filme Favorito"
        placeholder="Ex: Ficção Científica, Terror, Comédia"
        value={movieGenre}
        onChangeText={setMovieGenre}
        error={genreError}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>
          Receber Notificações de Lançamentos?
        </Text>
        {/* REQUISITO 7: Switch incluído no formulário */}
        <Switch
          value={receiveNotifications}
          onValueChange={setReceiveNotifications}
          trackColor={{ false: "#767577", true: "#4A90E2" }}
          thumbColor={receiveNotifications ? "#ffffff" : "#f4f3f4"}
        />
      </View>

      <View style={styles.buttonContainer}>
        {/* Utilizando o botão customizado criado no REQUISITO 8 */}
        <FormButton
          title="Enviar Formulário"
          onPress={handleSubmeter}
          disabled={!isButtonEnabled} // Sendo controlado pelo Req 9
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 16,
  },
  switchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  switchLabel: { fontSize: 14, fontWeight: "bold", color: "#333", flex: 1 },
  buttonContainer: { width: "100%", marginTop: 10 },
  loading: { flexDirection: "row", gap: 10 },
});
