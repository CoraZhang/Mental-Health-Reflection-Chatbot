This project is to create a chatbot where it "chats" with the user through text to guide the user to reflect on their behaviour, particularly whether their actions match the values listed here on page 99 they think are important to them.

This chatbot is using the framework rasa. Rasa home page. This github project.

To run the django server (while in .../frontend/ReflectChatbot) This lets you run the rest calls: python manage.py runserver NOT NEEDED ANYMORE

From the reflection-chatbot-ui folder, this starts the react server. You can view the site by typing in http://localhost:3000/ into your browser: npm start

To run rasa chatbot: In one terminal: rasa run actions In another terminal: rasa train rasa shell For rest calls (instead of rasa shell): rasa run -m models --enable-api --cors "*" --debug
