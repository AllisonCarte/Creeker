Select id, userTypeId, username, firstname, lastname, email, [password], isActive, imageLocation, createDateTime from [user]
Select id, [name] as [type] from usertype
select id, userid, categoryid, title, content, imageLocation, createDateTime, publishDateTime, isApproved, isEmergency from post
select id, postid, tagid from posttag
select id, [name] as [label] from tag
select id, [name] from category
select id, query, userid from question
select id, choiceOne, choiceTwo, choiceThree, choiceFour from choice
select id, questionId, choiceId, userId from questionchoice

--INSERT INTO Post(userId, categoryId, title, content, createDateTime, publishDateTime, isApproved, isEmergency)
--VALUES(2, 1, 'Breakfast with Santa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet placerat elit.', '2022-03-10 00:00:00.000', '2022-04-10 00:00:00.000', 1, 0)

--INSERT INTO postTag(postId, tagId)
--VALUES(1, 1)

--INSERT INTO question(query, userId)
--VALUES('How did you hear about us?', 4)

--INSERT INTO choice(choiceOne, choiceTwo, choiceThree, choiceFour)
--VALUES('Social Media', 'From a Friend', 'An advertisement', 'Other')

--INSERT INTO questionChoice(questionId, choiceId, userId)
--VALUES(1, 1, 5)

--INSERT INTO questionChoice(questionId, choiceId, userId)
--VALUES(1, 1, 1)

--INSERT INTO questionChoice(questionId, choiceId, userId)
--VALUES(1, 2, 3)